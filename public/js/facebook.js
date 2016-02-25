function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  $("div .facebookLogin").hide();
  console.log(response);
  var name = response['name'];
  var nameHTML = '<h1 id="name">' + name + '</h1>';
  $("#name").html(nameHTML);
  var imgURL = response.picture.data.url;
  $("#photo").attr('src', imgURL);
}