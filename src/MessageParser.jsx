class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse = (message) => {
    const lowerCase = message.toLowerCase();
    if (
      lowerCase.includes("hi") ||
      lowerCase.includes("hii") ||
      lowerCase.includes("hiii") ||
      lowerCase.includes("hello") ||
      lowerCase.includes("hey") ||
      lowerCase.includes("hiiii") ||
      lowerCase.includes("..") ||
      lowerCase.includes("heyy")
    ) {
      return this.actionProvider.Greeting();
    }

    if (
      lowerCase.includes("feature") ||
      lowerCase.includes("what you provide") ||
      lowerCase.includes("provide") ||
      lowerCase.includes("services") ||
      lowerCase.includes("tools") ||
      lowerCase.includes("tool") ||
      lowerCase.includes("about") ||
      lowerCase.includes("help") ||
      lowerCase.includes("methods")
    ) {
      return this.actionProvider.Tools();
    }

    if (
      lowerCase.includes("weather") ||
      lowerCase.includes("weather info") ||
      lowerCase.includes("weather information") ||
      lowerCase.includes("info about weather") ||
      lowerCase.includes("about weather") ||
      lowerCase.includes("weather of city") ||
      lowerCase.includes("information of weather") ||
      lowerCase.includes("mosam")
    ) {
      return this.actionProvider.WeatherInfoHandle();
    }

    if (
      lowerCase.includes("web") ||
      lowerCase.includes("webdevelop") ||
      lowerCase.includes("website") ||
      lowerCase.includes("website development") ||
      lowerCase.includes("web app") ||
      lowerCase.includes("web application") ||
      lowerCase.includes("webdevelopment") ||
      lowerCase.includes("web development") ||
      lowerCase.includes("websites")
    ) {
      return this.actionProvider.WebHandler();
    }

    if (
      lowerCase.includes("android") ||
      lowerCase.includes("ios") ||
      lowerCase.includes("flutter") ||
      lowerCase.includes("software") ||
      lowerCase.includes("softwaredevelop") ||
      lowerCase.includes("software develop") ||
      lowerCase.includes("softwaresite development") ||
      lowerCase.includes("software app") ||
      lowerCase.includes("software application") ||
      lowerCase.includes("softwaredevelopment") ||
      lowerCase.includes("software development")
    ) {
      return this.actionProvider.SoftwareHandler();
    }

    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
