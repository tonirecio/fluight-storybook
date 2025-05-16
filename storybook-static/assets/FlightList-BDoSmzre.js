import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as s}from"./index-BqIVwv1J.js";import{M as t}from"./index-BGurhFi8.js";import{F as l}from"./FlightList.stories-fCnTtTRf.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";function r(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(i.h1,{id:"flightlist",children:"FlightList"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"FlightCardFlightInformation"})," component is designed to display detailed information about a flight. It includes airline details, departure and arrival times, layover information, flight duration, and CO₂ emissions data."]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsx(i.h3,{id:"flightinfoparams",children:e.jsx(i.code,{children:"FlightInfoParams"})}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Prop Name"}),e.jsx(i.th,{children:"Type"}),e.jsx(i.th,{children:"Required"}),e.jsx(i.th,{children:"Description"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.code,{children:"fares"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"fare[]"})}),e.jsx(i.td,{children:"Yes"}),e.jsx(i.td,{children:"An array of fare objects containing pricing and emissions data."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.code,{children:"airline"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"carrier"})}),e.jsx(i.td,{children:"Yes"}),e.jsx(i.td,{children:"The airline operating the flight."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.code,{children:"operatedBy"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"carrier"})}),e.jsx(i.td,{children:"Yes"}),e.jsxs(i.td,{children:["The airline actually operating the flight (if different from ",e.jsx(i.code,{children:"airline"}),")."]})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.code,{children:"flights"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"flightDetail[]"})}),e.jsx(i.td,{children:"Yes"}),e.jsx(i.td,{children:"An array of flight details, including departure and arrival information."})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.code,{children:"index"})}),e.jsx(i.td,{children:e.jsx(i.code,{children:"number"})}),e.jsx(i.td,{children:"Yes"}),e.jsx(i.td,{children:"The index of the flight card in the list of flights."})]})]})]}),`
`,e.jsx(i.h2,{id:"typescript-types",children:"TypeScript Types"}),`
`,e.jsx(i.h3,{id:"fare",children:e.jsx(i.code,{children:"fare"})}),`
`,e.jsx(i.p,{children:"The fare type represents the cost and environmental impact of a flihgt fare"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`export default interface fare {\r
  name: string; // Name of the fare\r
  price: number; // Price of the fare\r
  basis: string; // Fare basis code\r
  currentEmissions: number; // Current CO₂ emissions for the fare\r
  typicalEmissions: number; //  Typical CO₂ emissions for the fare\r
  properties: fareProperties; // Additional properties of the fare\r
}
`})}),`
`,e.jsx(i.h3,{id:"fareproperties",children:e.jsx(i.code,{children:"fareProperties"})}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"fareProperties"})," type represents additional properties of a fare with the following structure:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`export default interface fareProperties {\r
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
`,e.jsx(i.h3,{id:"carrier",children:e.jsx(i.code,{children:"carrier"})}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"carrier"})," type represents a airline information object with the following structure:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`export default interface carrier {\r
  code: string;\r
  name: string;\r
}
`})}),`
`,e.jsx(i.h3,{id:"flightdetail",children:e.jsx(i.code,{children:"flightDetail"})}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"flightDetail"})," type represents a flight segment object with the following structure:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`interface flightDetail {\r
  code: string; // Flight number or code\r
  origin: airport; // Origin airport details\r
  destination: airport; // Destination airport details\r
  departure: flightTime; // Departure details\r
  arrival: flightTime; // Arrival details\r
}
`})}),`
`,e.jsx(i.h3,{id:"airport",children:e.jsx(i.code,{children:"airport"})}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"airport"})," type represents an airport object with the following structure:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`interface airport {\r
  code: string; // IATA code of the airport\r
  name?: string; // Full name of the airport\r
}
`})}),`
`,e.jsx(i.h3,{id:"flighttime",children:e.jsx(i.code,{children:"flightTime"})}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"flightTime"})," type represents the time and terminal information for a flight segment with the following structure:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-typescript",children:`interface flightTime {\r
  time: string; // Time in ISO 8601 format\r
  terminal?: string; // Terminal at the airport\r
}
`})}),`
`,e.jsx(i.h2,{id:"features",children:"Features"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Airline Information"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Displays the airline's logo and name."}),`
`,e.jsx(i.li,{children:'Shows an "Operated By" dialog if the flight is operated by a different airline.'}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Flight Times and Codes"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Displays departure and arrival times and airport codes."}),`
`,e.jsx(i.li,{children:"Includes layover information and indicators for multi-stop flights."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Flight Duration and Day Indicator"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Calculates and displays the total flight duration."}),`
`,e.jsx(i.li,{children:'Shows a "+1" or similar indicator if the flight arrives on the next day.'}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Flight Number"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Displays the flight number for the first segment."}),`
`,e.jsx(i.li,{children:"Shows additional flight numbers for multi-segment flights in a hoverable dialog."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"CO₂ Emissions Indicator"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Displays a CO₂ emissions indicator comparing the flight's emissions to the typical route."}),`
`,e.jsx(i.li,{children:"Shows a dialog with detailed emissions information on hover."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Dynamic Dialogs"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Displays hoverable dialogs for layover airport codes, additional flight numbers, and CO₂ emissions."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Testing Support"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Includes ",e.jsx(i.code,{children:"data-testid"})," attributes for easier testing with tools like ",e.jsx(i.code,{children:"@testing-library/react"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Airline Information"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Displays the airline's logo using the ",e.jsx(i.code,{children:"StyledAirlineLogo"})," component."]}),`
`,e.jsx(i.li,{children:`Shows the airline's name and an "Operated By" dialog if the flight is operated by a different airline.`}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Flight Times and Codes"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Displays the departure and arrival times and airport codes using ",e.jsx(i.code,{children:"StyledTime"})," and ",e.jsx(i.code,{children:"StyledAirportCode"}),"."]}),`
`,e.jsx(i.li,{children:"Includes layover information and a visual indicator for the number of stops."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Flight Duration and Day Indicator"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Calculates the total flight duration using the ",e.jsx(i.code,{children:"getDuration"})," function."]}),`
`,e.jsxs(i.li,{children:['Displays a "+1" or similar indicator for next-day arrivals using the ',e.jsx(i.code,{children:"getNumberOfDaysAhead"})," function."]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Flight Number"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Displays the flight number for the first segment using ",e.jsx(i.code,{children:"StyledFlightNumberCode"}),"."]}),`
`,e.jsx(i.li,{children:"Shows additional flight numbers for multi-segment flights in a hoverable dialog."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"CO₂ Emissions Indicator"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Calculates the flight's CO₂ emissions compared to the typical route using the ",e.jsx(i.code,{children:"calculateFligthEmissions"})," function."]}),`
`,e.jsx(i.li,{children:"Displays a positive or negative percentage indicator with a hoverable dialog for detailed information."}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Dynamic Dialogs"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Displays hoverable dialogs for:",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Layover airport codes using ",e.jsx(i.code,{children:"getLayoverCodes"}),"."]}),`
`,e.jsxs(i.li,{children:["Additional flight numbers using ",e.jsx(i.code,{children:"getExtraFlightCodes"}),"."]}),`
`,e.jsx(i.li,{children:"CO₂ emissions details."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Keyboard and Mouse Interaction"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Users can hover over elements like the airline name, layover codes, and CO₂ indicators to view additional information in dialogs."}),`
`]}),`
`]}),`
`]})]})}function u(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{u as default};
