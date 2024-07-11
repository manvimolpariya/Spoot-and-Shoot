export const cardData = [
    {
        title : "Missing Report",
        color : {
            backGround : "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow : "0px 10px 20px 0px #e0c6f5"
        },
        barValue : 70,
        value : "2500",
        png : 'fa-regular fa-file',
        series : [
           { name : "Missing Report",
            data : [31, 40, 28, 51, 42, 109, 100],
           },
        ],
    },
    {
        title : "Found",
        color : {
            backGround : "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
            boxShadow : "0px 10px 20px 0px #fdc0c7"
        },
        barValue : 80,
        value : "200",
        png : "fa-solid fa-user",
        series : [
           { name : "Found",
            data : [10, 100, 50, 70, 80, 30, 40],
           },
        ],
    },
    {
        title : "Spot Shoot",
        color : {
            backGround :
             "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow : "0px 10px 20px 0px #f9d59b"
        },
        barValue : 60,
        value : "500",
        png : "fa-solid fa-camera",
        series : [
           { name : "Spot Shoot",
            data : [10, 25, 15, 30, 12, 15, 20],
           },
        ],
    },
]