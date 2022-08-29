$("#add_user").submit(function (event) {
  alert("Data Inserted Successfully!");
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  const accessToken = response.data.access_token;
  var id = $(this).attr("data-id");

  var request = {
    url: `hhttps://dev-tyofb4m1.us.auth0.com/api/v2/users/${id}`,
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    const accessToken = response.data.access_token;
    var id = $(this).attr("data-id");

    var request = {
      url: `https://dev-tyofb4m1.us.auth0.com/api/v2/users/${id}`,
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}
