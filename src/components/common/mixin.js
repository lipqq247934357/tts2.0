export default {
  computed: {
    isApp() {
      return sessionStorage.getItem('device') === '1' || sessionStorage.getItem('device') === '2';
    }
  }
};
