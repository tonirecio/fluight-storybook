import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as t}from"./index-BqIVwv1J.js";import{M as s}from"./index-BGurhFi8.js";import{F as l}from"./FlightCard.stories-CpawV37e.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l}),`
`,e.jsx(n.h1,{id:"flightcard",children:"FlightCard"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FlightCard"})," component is designed to display detailed information about a flight, including airline details, flight segments, and fare options. It integrates the ",e.jsx(n.code,{children:"FlightCardFlightInformation"})," and ",e.jsx(n.code,{children:"FlightCardFlightFares"})," components to provide a comprehensive view of the flight."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"flightcardprops",children:e.jsx(n.code,{children:"FlightCardProps"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"flightData"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"populatedRoute"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"The flight data containing airline, flight segments, and fare details."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"index"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"The index of the flight card in the list of flights."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"selected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"Indicates whether the flight card is currently selected."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onCardSelected"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"(index: number) => void"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"A callback function triggered when the flight card is selected."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"typescript-types",children:"TypeScript Types"}),`
`,e.jsx(n.h3,{id:"populatedroute",children:e.jsx(n.code,{children:"populatedRoute"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"populatedRoute"})," type represents the structure of a flight route object, with all sub types populated with data, with the following properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export default interface populatedRoute {\r
  routeId: string; // Unique identifier for the route\r
  carrier: carrier; // Airline operating the flight\r
  origin: string; // Origin airport code\r
  destination: string; // Destination airport code\r
  flights: populatedFlightDetail[]; // Array of flight details\r
  fares: fare[]; // Array of fare options for the flight\r
}
`})}),`
`,e.jsx(n.h3,{id:"carrier",children:e.jsx(n.code,{children:"carrier"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"carrier"})," type represents a airline information object with the following structure:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export default interface carrier {\r
  code: string;\r
  name: string;\r
}
`})}),`
`,e.jsx(n.h3,{id:"populatedflightdetail",children:e.jsx(n.code,{children:"populatedFlightDetail"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"populatedFlightDetail"})," type represents a flight segment object, with all sub types populated with data, with the following properties:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export default interface populatedFlightDetail {\r
  origin: location; // Origin airport details\r
  destination: location; // Destination airport details\r
  code: string; // Flight number or code\r
  aircraft: string; // Aircraft type\r
  arrival: { time: string; terminal: string }; // Arrival details\r
  departure: { time: string; terminal: string }; // Departure details\r
  operatedBy: carrier; // Airline operating the flight\r
}
`})}),`
`,e.jsx(n.h3,{id:"location",children:e.jsx(n.code,{children:"location"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"location"})," type represents a location object with the following structure:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type location = {\r
  code: string; // The airport code (e.g., "JFK").\r
  city: string; // The city name (e.g., "New York").\r
  country: string; // The country name (e.g., "USA").\r
  airportName: string; // The name of the airport (e.g., "John F. Kennedy International").\r
  description: string; // Description of the location\r
  type: string; // Type of location (e.g., "Airport", "City")\r
  icon: string; // Icon representing the location\r
};
`})}),`
`,e.jsx(n.h3,{id:"fare",children:e.jsx(n.code,{children:"fare"})}),`
`,e.jsx(n.p,{children:"The fare type represents the cost and environmental impact of a flihgt fare"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export default interface fare {\r
  name: string; // Name of the fare\r
  price: number; // Price of the fare\r
  basis: string; // Fare basis code\r
  currentEmissions: number; // Current CO₂ emissions for the fare\r
  typicalEmissions: number; //  Typical CO₂ emissions for the fare\r
  properties: fareProperties; // Additional properties of the fare\r
}
`})}),`
`,e.jsx(n.h3,{id:"fareproperties",children:e.jsx(n.code,{children:"fareProperties"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"fareProperties"})," type represents additional properties of a fare with the following structure:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export default interface fareProperties {\r
  fareType: string; // Type of fare (e.g., "Economy", "Business")\r
  contentSource: string; // Source of fare content (e.g., "GDS", "API")\r
  carryOnBag: string; // Carry-on baggage allowance\r
  checkedBag: string; // Checked baggage allowance\r
  refundable: string; // Refundable status\r
  changeable: string; // Changeable status\r
  mileageAccrual: string; // Mileage accrual information\r
  usbPower: string; // USB power availability\r
  priorityCheckIn: string; // Priority check-in status\r
  priorityBoarding: string; // Priority boarding status\r
  priorityBaggage: string; // Priority baggage handling status\r
  fastTrack: string; // Fast track security status\r
  loungeAccess: string; // Lounge access status\r
  upgrade: string | null; // Upgrade availability\r
  transferService: string | null; // Transfer service availability\r
  personalItem: string | null; // Personal item allowance\r
  earlySeatSelection: string; // Early seat selection availability\r
  extraLegroom: string; // Extra legroom availability\r
  premiumSeat: string | null; // Premium seat availability\r
  lieFlatSeat: string | null; // Lie-flat seat availability\r
  mealBeverages: string | null; // Meal and beverage options\r
  wifiAccess: string | null; // Wi-Fi access availability\r
  inFlightEntertainment: string; // In-flight entertainment options\r
}
`})}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Comprehensive Flight Details"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Includes detailed information about the flight's origin and destination locations using the ",e.jsx(n.code,{children:"location"})," interface."]}),`
`,e.jsx(n.li,{children:"Provides the flight code and aircraft type for identification."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Operational Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Contains details about the airline operating the flight through the ",e.jsx(n.code,{children:"operatedBy"})," property, which uses the ",e.jsx(n.code,{children:"carrier"})," interface."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Time and Terminal Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Includes structured data for both departure and arrival times and terminals."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Reusable Structure"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Designed to be used across multiple components, such as flight cards, itineraries, and flight comparison tools."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Standardized Data Representation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensures consistent representation of flight segment data throughout the application."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Data Representation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"populatedFlightDetail"})," interface ensures that all flight segment-related data is consistently structured and includes all necessary fields."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Integration"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Used in components like ",e.jsx(n.code,{children:"FlightCardFlightInformation"})," to display detailed flight segment information."]}),`
`,e.jsx(n.li,{children:"Supports dynamic rendering of flight details in itineraries, flight cards, and comparison tools."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Time and Terminal Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"arrival"})," and ",e.jsx(n.code,{children:"departure"})," properties provide structured data for displaying flight times and terminal information in a user-friendly format."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Operational Details"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"operatedBy"})," property allows components to display the airline operating the flight, even if it differs from the marketing carrier."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Reusability"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The interface is designed to be reusable across various components, ensuring consistent data handling and display."}),`
`]}),`
`]}),`
`]})]})}function m(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{m as default};
