import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as s}from"./index-BqIVwv1J.js";import{M as t}from"./index-BGurhFi8.js";import{F as l}from"./FlightCardFlightFares.stories-4bCL5Y7a.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";function i(n){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(r.h1,{id:"flightcardflightfares",children:"FlightCardFlightFares"}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"FlightCardFlightFares"})," component is designed to display fare options for a specific flight route. It allows users to view fare details, select fares for comparison, and add fares to their flight selection."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(r.h3,{id:"flightcardflightfaresprops",children:e.jsx(r.code,{children:"FlightCardFlightFaresProps"})}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Prop Name"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Required"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"route"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"populatedRoute"})}),e.jsx(r.td,{children:"Yes"}),e.jsx(r.td,{children:"The flight route containing fare details and other related information."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"index"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"number"})}),e.jsx(r.td,{children:"Yes"}),e.jsx(r.td,{children:"The index of the flight card in the list of flights."})]})]})]}),`
`,e.jsx(r.h2,{id:"typescript-types",children:"TypeScript Types"}),`
`,e.jsx(r.h3,{id:"populatedroute",children:e.jsx(r.code,{children:"populatedRoute"})}),`
`,e.jsx(r.p,{children:"The populatedRoute type represents the structure of a flight route object, with all sub types populated with data, with the following properties:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`export default interface populatedRoute {\r
  routeId: string; // Unique identifier for the route\r
  carrier: carrier; // Airline operating the flight\r
  origin: string; // Origin airport code\r
  destination: string; // Destination airport code\r
  flights: populatedFlightDetail[]; // Array of flight details\r
  fares: fare[]; // Array of fare options for the flight\r
}
`})}),`
`,e.jsx(r.h3,{id:"populatedflightdetail",children:e.jsx(r.code,{children:"populatedFlightDetail"})}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"populatedFlightDetail"})," type represents a flight segment object, with all sub types populated with data, with the following properties:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`export default interface populatedFlightDetail {\r
  origin: location; // Origin airport details\r
  destination: location; // Destination airport details\r
  code: string; // Flight number or code\r
  aircraft: string; // Aircraft type\r
  arrival: { time: string; terminal: string }; // Arrival details\r
  departure: { time: string; terminal: string }; // Departure details\r
  operatedBy: carrier; // Airline operating the flight\r
}
`})}),`
`,e.jsx(r.h3,{id:"location",children:e.jsx(r.code,{children:"location"})}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"location"})," type represents a location object with the following structure:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`type location = {\r
  code: string; // The airport code (e.g., "JFK").\r
  city: string; // The city name (e.g., "New York").\r
  country: string; // The country name (e.g., "USA").\r
  airportName: string; // The name of the airport (e.g., "John F. Kennedy International").\r
  description: string; // Description of the location\r
  type: string; // Type of location (e.g., "Airport", "City")\r
  icon: string; // Icon representing the location\r
};
`})}),`
`,e.jsx(r.h3,{id:"carrier",children:e.jsx(r.code,{children:"carrier"})}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"carrier"})," type represents a airline information object with the following structure:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`export default interface carrier {\r
  code: string; // IATA code of the airline\r
  name: string; // Full name of the airline\r
}
`})}),`
`,e.jsx(r.h3,{id:"fare",children:e.jsx(r.code,{children:"fare"})}),`
`,e.jsx(r.p,{children:"The fare type represents the cost and environmental impact of a flihgt fare"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`export default interface fare {\r
  name: string; // Name of the fare\r
  price: number; // Price of the fare\r
  basis: string; // Fare basis code\r
  currentEmissions: number; // Current CO₂ emissions for the fare\r
  typicalEmissions: number; //  Typical CO₂ emissions for the fare\r
  properties: fareProperties; // Additional properties of the fare\r
}
`})}),`
`,e.jsx(r.h3,{id:"fareproperties",children:e.jsx(r.code,{children:"fareProperties"})}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"fareProperties"})," type represents additional properties of a fare with the following structure:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`export default interface fareProperties {\r
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
`,e.jsx(r.h2,{id:"features",children:"Features"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Fare Display"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Displays up to two fare options for a flight route."}),`
`,e.jsxs(r.li,{children:["Shows the fare name and price for each option in a visually distinct container (",e.jsx(r.code,{children:"StyledFareBox"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Fare Selection"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Allows users to select a fare by clicking on a button."}),`
`,e.jsxs(r.li,{children:["Highlights the primary fare option for better visibility using the ",e.jsx(r.code,{children:"$highlighted"})," prop."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Fare Comparison"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Includes checkboxes for users to select fares for comparison."}),`
`,e.jsxs(r.li,{children:["Tracks selected fares using the ",e.jsx(r.code,{children:"checkedFares"})," state."]}),`
`,e.jsxs(r.li,{children:["Displays a custom check icon (",e.jsx(r.code,{children:"CheckIcon"}),") when a fare is selected for comparison."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Dynamic Rendering"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Dynamically renders fare options based on the number of available fares."}),`
`,e.jsx(r.li,{children:"Displays a placeholder if fewer than two fares are available."}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Customizable Buttons"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Uses ",e.jsx(r.code,{children:"DefaultButton"})," for the primary fare and ",e.jsx(r.code,{children:"RegularButton"})," for secondary fares."]}),`
`,e.jsxs(r.li,{children:["Buttons trigger the ",e.jsx(r.code,{children:"handleAddFlight"})," function to add the selected fare to the flight selection."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Price Formatting"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Formats fare prices using the ",e.jsx(r.code,{children:"formatPrice"})," function, ensuring consistency in currency display."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Testing Support"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Includes ",e.jsx(r.code,{children:"data-testid"})," attributes for easier testing with tools like ",e.jsx(r.code,{children:"@testing-library/react"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Reusable Check Icon"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Displays a custom check icon (",e.jsx(r.code,{children:"CheckIcon"}),") when a fare is selected for comparison."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Rendering Fares"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["The component maps over the ",e.jsx(r.code,{children:"route.fares"})," array to render up to two fare options."]}),`
`,e.jsxs(r.li,{children:["Each fare is displayed in a styled container (",e.jsx(r.code,{children:"StyledFareBox"}),") with its name and price."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Fare Selection"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Clicking on a fare button triggers the ",e.jsx(r.code,{children:"handleAddFlight"})," function, which adds the selected fare to the flight selection."]}),`
`,e.jsxs(r.li,{children:["The primary fare is highlighted using the ",e.jsx(r.code,{children:"$highlighted"})," prop in ",e.jsx(r.code,{children:"StyledFareBox"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Fare Comparison"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Users can select fares for comparison using checkboxes."}),`
`,e.jsxs(r.li,{children:["The ",e.jsx(r.code,{children:"addFareToCompare"})," function toggles the selection state of a fare and updates the ",e.jsx(r.code,{children:"checkedFares"})," state."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Dynamic Rendering"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"If fewer than two fares are available, the component renders a placeholder for the missing fare."}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Price Formatting"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["The ",e.jsx(r.code,{children:"formatPrice"})," function formats fare prices using the ",e.jsx(r.code,{children:"Intl.NumberFormat"})," API, ensuring consistent currency formatting."]}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Keyboard and Mouse Interaction"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Users can interact with the component using both keyboard and mouse."}),`
`,e.jsx(r.li,{children:"Buttons and checkboxes are accessible and trigger their respective actions."}),`
`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Error Handling"}),":"]}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"The component gracefully handles cases where fewer than two fares are available by displaying placeholders."}),`
`]}),`
`]}),`
`]})]})}function m(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{m as default};
