$(document).ready(function () {
  var checkExist = setInterval(function () {
    if ($("#job-details").length == 0) {
      return;
    }

    const linkedInJobs = $("html")
      .find("#job-details")
      .find("h1, h2, h3, h4, h5, h6, p, label, span");

    linkedInJobs.each(function () {
      // console.log(this.innerText);
    });
  }, 1000);

  console.log(dictionary.key);
});
