const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())

 let Items = [
    {
        type: "Sport",
        name: "Lamborghini Huracan EVO",
        img : "./img/LamborghiniHuracanEVO.jpg",
        price: "333633",
        year:"2021",
        status: "new",
        km: "0",
        id: 0
        

    },
    {
        type: "Sport",
        name: "Mercedes-Benz AMG GT",
        img : "./img/2021 Mercedes-Benz AMG GT.png",
        price: " 131750",
        year:"2021",
        status: "used",
        km:"22345",
        id: 1
        

    },
    {
        type: "Coupe",
        name: "ASTON MARTIN DB9 Coupé 6.0 V12 ",
        img : "./img/ASTON MARTIN DB9 Coupé 6.0 V12 (Coupé).jpg",
        price: "39950" ,
        year:"2022",
        status: "used",
        km:"43000",
        id: 2
        

    },
    {
        type: "Coupe",
        name: "TESLA Model 3 Long R. Dual AWD",
        img : "./img/TESLA Model 3 Long R. Dual AWD (Limousine)(coupe).jpeg",
        price: "39950" ,
        year:"2020",
        status: "new",
        km:"0",
        id: 3
        

    },
    {
        type: "Suv",
        name: "CHEVROLET trailblazer 4dr",
        img : "./img/2021_chevrolet_trailblazer_4dr-suv.png",
        price: "37600" ,
        year:"2022",
        status: "used",
        km:"85432",
        id: 4
        

    },
    {
        type: "Suv",
        name: "VOLKSWAGEN taos 4dr",
        img : "./img/2022_volkswagen_taos_4dr-suv.png",
        price: "66400" ,
        year:"2022",
        status: "used",
        km:"123000",
        id: 5
        

    },
    {
        type: "Hatchback",
        name: "CHEVROLET bolt ev",
        img : "./img/2022-chevrolet-bolt-ev-(hatchbacks).png",
        price: "126400" ,
        year:"2022",
        status: "new",
        km:"0",
        id: 6
        

    },
    {
        type: "Hatchback",
        name: "KIA rio",
        img : "./img/Kia rio (hatchbacks).png",
        price: "136800" ,
        year:"2022",
        status: "new",
        km:"0",
        id: 7
        

    }

]



  app.get('/Items', (request, response) => {
    response.json(Items)
  })

  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })