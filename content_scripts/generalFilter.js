$(document).ready(function () {
  console.log("Modifying");
  generalInterval();
});

const generalInterval = () => {
  setInterval(function () {
    if ($("html").text().length == 0) {
      return;
    }
    filter();
  }, 1000);
};

const filter = () => {
  const allText = $("html");

  allText
    .contents()
    .filter(function () {
      return this.nodeType === 3 && $.trim(this.textContent).length;
    })
    .wrap("</p>");

  allText.children().each(function () {
    recurseOnChildren(this);
  });
};
