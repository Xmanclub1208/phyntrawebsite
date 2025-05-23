const locations = [
    {
      "id": "chic-usa",
      "name": "Chicago",
      "url": "https://google.com"
    },
    {
      "id": "ny-usa",
      "name": "New York",
      "url": "https://google.com"
    },
    {
      "id": "lon",
      "name": "London",
      "url": "https://google.com"
    },
    {
      "id": "syd",
      "name": "Sydney AU",
      "url": "https://google.com"
    }
  ];
  
  class Location {
    constructor(id, name, pingUrl) {
      this.id = id;
      this.name = name;
      this.pingUrl = pingUrl;
    }
  
    // Get ping for one location
    getPing() {
      return new Promise((resolve, reject) => {
        const start = Date.now();
        fetch(this.pingUrl, { mode: "no-cors" })
          .then(() => resolve(Math.round(Date.now() - start)))
          .catch(() => resolve(Infinity)); // Handle errors by resolving with Infinity
      });
    }
  
    async getAveragePing() {
      const entries = [];
      for (let i = 0; i < 10; i++) {
        entries.push(await this.getPing());
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      return entries.length > 0 ? Math.round(entries.reduce((prev, curr) => prev + curr) / entries.length) : 0;
    }
  
    // Get all Location instances
    static getAll() {
      return locations.map(location => new Location(location.id, location.name, location.url));
    }
  
    // Get response times for all locations
    static async getPings() {
      const locationsWithPings = await Promise.all(this.getAll().map(async location => {
        const ping = await location.getAveragePing();
        return { ...location, ping };
      }));
      return locationsWithPings;
    }
  }
  
  const pingButton = document.querySelector("#ping-start");
  const pingButtonText = pingButton.innerHTML;
  let allowPing = true;
  
  const clearPingResults = () => {
    const results = document.querySelectorAll(".ping-result");
    results.forEach(result => result.remove());
  };
  
  pingButton.onclick = async () => {
    if (!allowPing) return;
    clearPingResults();
  
    allowPing = false;
    pingButton.innerHTML = "PINGING";
    pingButton.classList.add("ping-active");
  
    const originalText = pingButton.innerHTML;
  
    const addDots = () => {
      if (allowPing) return;
      for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
          if (!allowPing) pingButton.innerHTML += ".";
        }, i * 1000);
      }
      setTimeout(() => {
        if (!allowPing) {
          pingButton.innerHTML = originalText;
          addDots();
        }
      }, 4000);
    };
  
    addDots();
  
    const locationsWithPing = await Location.getPings();
    locationsWithPing.forEach(location => {
      const locationSpan = document.querySelector(`#location-${location.id}`);
  
      const pingSpan = document.createElement("span");
      pingSpan.classList.add("ping-result");
  
      pingSpan.textContent = `${location.ping}ms`;
      if (location.ping <= 115) {
        pingSpan.style.color = 'lime';
      } else if (location.ping <= 200) {
        pingSpan.style.color = 'orange';
      } else {
        pingSpan.style.color = 'red';
      }
  
      locationSpan.appendChild(document.createTextNode(' '));
      locationSpan.appendChild(pingSpan);
    });
  
    allowPing = true;
    pingButton.innerHTML = pingButtonText;
    pingButton.classList.remove("ping-active");
  };
  