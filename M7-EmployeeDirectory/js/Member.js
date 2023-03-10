class Member {
  constructor(data) {
    Object.assign(this, data);
  }

  // if social is linkedin, return linkedin icon
  // if social is twitter, return twitter icon
  getSocialIcons() {
    return Object.keys(this.social)
      .map((key) => {
        return `
          <a href="${this.social[key]}" target="_blank">
            <i class="fab fa-${key}"></i>
          </a>
        `;
      })
      .join("");
  }

  getHtml() {
    this.socialIcons = this.getSocialIcons();
    return `
      <div class="result-card">
        <img class="result-image" src="./images/photos/${this.image}" alt="">
        <p class="result-name">${this.name}</p>
        <p class="result-title">${this.title}</p>
        <p class="result-bio">${this.bio}</p>
        <div class="result-social">
          ${this.socialIcons}
        </div>
      </div>
    `;
  }
}

export default Member;