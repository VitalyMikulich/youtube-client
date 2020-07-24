import AppViewsCount from './AppViewsCount';

export default class AppModel {
  constructor(state, countOfClipsPerPage) {
    this.state = state;
    this.countOfClipsPerPage = countOfClipsPerPage;
  }

  static extractVideoInfo(videoData) {
    return videoData.items.map(clip => clip.statistics.viewCount);
  }

  static async extractClipInfo(data, countOfClipsPerPage) {
    const videoIds = data.items.map(clip => clip.id.videoId).join(',');
    const videoContainer = {
      videoUrl: '',
    };
    videoContainer.videoUrl = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyByXP7m96EEVAI2CpA8YsZ8zXnXcnagT6Y&id=${videoIds}&part=snippet,statistics`;
    const viewsCount = new AppViewsCount(videoContainer);
    const videosInfo = await viewsCount.getClipsViewsCount();
    let page = 1;
    return data.items.map((clip, index) => {
      if (index % countOfClipsPerPage === 0 && index !== 0) page += 1;
      const date = new Date(clip.snippet.publishedAt);
      return {
        title: clip.snippet.title,
        publishedAt: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        img: clip.snippet.thumbnails.medium.url,
        description: clip.snippet.description,
        videoId: clip.id.videoId,
        channelTitle: clip.snippet.channelTitle,
        viewsCount: videosInfo[index],
        videoPage: page,
      };
    });
  }

  async getClipInfo() {
    const { url } = this.state;
    const responce = await fetch(url);
    const data = await responce.json();

    return AppModel.extractClipInfo(data, this.countOfClipsPerPage);
  }
}
