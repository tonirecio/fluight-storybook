import{t}from"./index.esm-2RnB_YqG.js";const l={title:"Results/FlightCard",component:t,parameters:{layout:"centered"}},e={args:{flightData:{routeId:"5nsir9bf3",carrier:{code:"IB",name:"Iberia"},origin:"BCN",destination:"MAD",flights:[{origin:{code:"BCN",city:"Barcelona",country:"Spain",airportName:"All Airports",description:"Barcelona, Spain (All Airports)",type:"city",icon:"house"},destination:{},code:"IB4111",aircraft:"Boeing 777-200",arrival:{time:"2024-11-05T07:50:00.000Z",terminal:"1"},departure:{time:"2024-11-05T06:10:00.000Z",terminal:"2A"},operatedBy:{code:"IB",name:"Iberia"}},{origin:{},destination:{code:"MAD",city:"Madrid",country:"Spain",airportName:"All Airports",description:"Madrid, Spain (All Airports)",type:"city",icon:"house"},code:"IB5555",aircraft:"Boeing 777-200",arrival:{time:"2024-11-05T10:00:00.000Z",terminal:"1"},departure:{time:"2024-10-01T08:40:00.000Z",terminal:"2A"},operatedBy:{code:"IB",name:"Iberia"}}],fares:[{name:"Optima",price:5891.68,basis:"O·OKN0Z0M9",currentEmissions:155,typicalEmissions:160,properties:{fareType:"Airline Private",contentSource:"Traditional",carryOnBag:"included",checkedBag:"included",refundable:"included",changeable:"included",mileageAccrual:"included",usbPower:"unavailable",priorityCheckIn:"included",priorityBoarding:"included",priorityBaggage:"unavailable",fastTrack:"included",loungeAccess:"included",upgrade:null,transferService:null,personalItem:null,earlySeatSelection:"chargable",extraLegroom:"unavailable",premiumSeat:null,lieFlatSeat:null,mealBeverages:null,wifiAccess:null,inFlightEntertainment:"included"}}]},index:0,selected:!1,onCardSelected:r=>{window.alert("Flight index selected: "+JSON.stringify(r))}}};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    flightData: {
      routeId: "5nsir9bf3",
      carrier: {
        code: "IB",
        name: "Iberia"
      },
      origin: "BCN",
      destination: "MAD",
      flights: [{
        origin: {
          code: "BCN",
          city: "Barcelona",
          country: "Spain",
          airportName: "All Airports",
          description: "Barcelona, Spain (All Airports)",
          type: "city",
          icon: "house"
        },
        destination: {},
        code: "IB4111",
        aircraft: "Boeing 777-200",
        arrival: {
          time: "2024-11-05T07:50:00.000Z",
          terminal: "1"
        },
        departure: {
          time: "2024-11-05T06:10:00.000Z",
          terminal: "2A"
        },
        operatedBy: {
          code: "IB",
          name: "Iberia"
        }
      }, {
        origin: {},
        destination: {
          code: "MAD",
          city: "Madrid",
          country: "Spain",
          airportName: "All Airports",
          description: "Madrid, Spain (All Airports)",
          type: "city",
          icon: "house"
        },
        code: "IB5555",
        aircraft: "Boeing 777-200",
        arrival: {
          time: "2024-11-05T10:00:00.000Z",
          terminal: "1"
        },
        departure: {
          time: "2024-10-01T08:40:00.000Z",
          terminal: "2A"
        },
        operatedBy: {
          code: "IB",
          name: "Iberia"
        }
      }],
      fares: [{
        name: "Optima",
        price: 5891.68,
        basis: "O·OKN0Z0M9",
        currentEmissions: 155,
        typicalEmissions: 160,
        properties: {
          fareType: "Airline Private",
          contentSource: "Traditional",
          carryOnBag: "included",
          checkedBag: "included",
          refundable: "included",
          changeable: "included",
          mileageAccrual: "included",
          usbPower: "unavailable",
          priorityCheckIn: "included",
          priorityBoarding: "included",
          priorityBaggage: "unavailable",
          fastTrack: "included",
          loungeAccess: "included",
          upgrade: null,
          transferService: null,
          personalItem: null,
          earlySeatSelection: "chargable",
          extraLegroom: "unavailable",
          premiumSeat: null,
          lieFlatSeat: null,
          mealBeverages: null,
          wifiAccess: null,
          inFlightEntertainment: "included"
        }
      }]
    },
    index: 0,
    selected: false,
    onCardSelected: flightData => {
      window.alert("Flight index selected: " + JSON.stringify(flightData));
    }
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const o=["Default"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:o,default:l},Symbol.toStringTag,{value:"Module"}));export{d as F};
