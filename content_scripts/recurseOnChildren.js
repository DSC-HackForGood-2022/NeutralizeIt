const recurseOnChildren = (childElement) => {
  if ($(childElement).children().length <= 0) {
    $(childElement).text(filterText($(childElement).text()));
    return;
  }
  $(childElement)
    .children()
    .each(function () {
      recurseOnChildren(this);
    });
};
