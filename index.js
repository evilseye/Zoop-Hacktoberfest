const getData = async () => {
  const api =
    "https://api.github.com/repos/evilseye/zoop-hacktoberfest/contributors";
  try {
    let data = await fetch(api);
    realData = await data.json();
    // console.log(realData);
    var html = '<div class="row">';
    for (i = 0; i < realData.length; i++) {
      if (i % 3 == 0 && i != 0) {
        html += "</div>";
        html += '<div class="row">';
      }
      html += `<div class="col-md-4 col-12">`;
      html += `<div class=" card  mt-5 card_red text-center">
                                <div class="title">
                                <img src="${realData[i].avatar_url}" alt="" id="imgbg" >
                                <div class="mt-3">
                                <h4 class="text-light">${realData[i].login}</h4>
                                <p class="commit text-light">Total Commits-${realData[i].contributions}</>
                                <a href="${realData[i].html_url}">Github</a>
                                </div>
                            </div></div></div>`;
    }

    $("#rowdy").append(html);
  } catch (error) {
    console.log(error);
  }
};
getData();
function show() {
  setTimeout(
    function() {
      document.getElementById('discord-shoutout').classList.add('online');
    },
    200
  );
}

function reset() {
  hide();
  setTimeout(show, 1500);
}

function hide() {
  document.getElementById('discord-shoutout').classList.remove('online');
}

show();
