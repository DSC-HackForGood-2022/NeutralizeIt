$(document).ready(function () {
  console.log(dictionary.key);
  setTimeout(linkedInInterval, 4000);
});

const linkedInInterval = () => {
  console.log("checking");
  setInterval(function () {
    if ($("#job-details").length == 0) {
      return;
    }
    filterLinkedIn();
  }, 1000);
};

const filterLinkedIn = () => {
  const linkedInJobs = $("html").find("#job-details").find("span");

  linkedInJobs
    .contents()
    .filter(function () {
      return this.nodeType === 3 && $.trim(this.textContent).length;
    })
    .wrap("</p>");

  linkedInJobs.children().each(function () {
    const recurseOnChildren = (childElement) => {
      if ($(childElement).children().length <= 0) {
        $(childElement).text(filterText($(childElement).text()));
        return;
      }

      $(childElement)
        .children()
        .each(function () {
          // console.log(this);
          recurseOnChildren(this);
        });
    };

    recurseOnChildren(this);
  });
};
