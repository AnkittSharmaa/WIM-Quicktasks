function validate() {
  var value = $("#email_phone").val();

  var regex = new RegExp(
    "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$"
  );

  if (value) {
    if (!regex.test(value)) {
      $("#error").text("Please enter valid email address or phone number.");
    } else {
      $("#error").text("");
    }
  } else {
    $("#error").text("This field is required.");
  }
}
