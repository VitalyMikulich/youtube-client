export default class AppViewsCount {
  constructor(state) {
    this.state = state;
  }

  static extractVideoInfo(videoData) {
    return videoData.items.map(clip => clip.statistics.viewCount);
  }

  async getClipsViewsCount() {
    const { videoUrl } = this.state;
    const responce = await fetch(videoUrl);
    const videoData = await responce.json();
    return AppViewsCount.extractVideoInfo(videoData);
  }
}
