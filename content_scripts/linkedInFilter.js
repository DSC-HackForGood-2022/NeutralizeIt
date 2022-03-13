$(document).ready(function () {
  console.log("Modifying");
  linkedInInterval();
});

const linkedInInterval = () => {
  setInterval(function () {
    if ($("#job-details").text().length == 0) {
      return;
    }
    filterLinkedIn();
  }, 1000);
};

const filterLinkedIn = () => {
  const linkedInJobs = $("#job-details").find("span");

  linkedInJobs
    .contents()
    .filter(function () {
      return this.nodeType === 3 && $.trim(this.textContent).length;
    })
    .wrap("</p>");

  linkedInJobs.children().each(function () {
    recurseOnChildren(this);
  });
};
