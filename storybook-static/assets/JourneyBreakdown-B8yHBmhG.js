import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{useMDXComponents as s}from"./index-BqIVwv1J.js";import{M as t}from"./index-BGurhFi8.js";import{J as l}from"./JourneyBreakdown.stories-BBZuK-eK.js";import"./index-D4H_InIO.js";import"./iframe-BMwGSSer.js";import"./index-vYCkCKEW.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-2RnB_YqG.js";import"./styled-components.browser.esm-ALczo-9h.js";function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(n.h1,{id:"journeybreakdown",children:"JourneyBreakdown"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"JourneyBreakdown"})," component is designed to display a detailed breakdown of a journey, including flight segments, layovers, and fare information."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"journeybreakdownprops",children:e.jsx(n.code,{children:"JourneyBreakdownProps"})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Required"}),e.jsx(n.th,{children:"Default Value"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"journey"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"journey"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The journey object containing flight and layover details."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"selectedFare"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"fare"})}),e.jsx(n.td,{children:"Yes"}),e.jsx(n.td,{children:"N/A"}),e.jsx(n.td,{children:"The selected fare for the journey, including fare name and code."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"testId"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"No"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'journey-breakdown'"})}),e.jsxs(n.td,{children:["The ",e.jsx(n.code,{children:"data-testid"})," attribute for testing purposes."]})]})]})]}),`
`,e.jsx(n.h2,{id:"typescript-types",children:"TypeScript Types"}),`
`,e.jsx(n.h3,{id:"journey",children:e.jsx(n.code,{children:"journey"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"journey"})," type represents a journey object with the following structure:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`type journey = {\r
  carrier: carrier; // Airline information\r
  layovers: string[]; // Array of layover locations\r
  flights: populatedFlightDetail[]; // Array of flight details\r
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
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Journey Breakdown Rendering"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Dynamically renders a list of flight segments using the ",e.jsx(n.code,{children:"JourneyBreakdownItem"})," component."]}),`
`,e.jsx(n.li,{children:"Displays detailed information for each flight, including origin, destination, departure and arrival times, terminals, and aircraft."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Layover Detection"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Identifies layovers based on the ",e.jsx(n.code,{children:"journey.layovers"})," array."]}),`
`,e.jsxs(n.li,{children:["Passes layover information (e.g., airport code and country) to the ",e.jsx(n.code,{children:"JourneyBreakdownItem"})," component."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Fare Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displays the selected fare name and fare code for the journey."}),`
`,e.jsxs(n.li,{children:["Handles cases where no fare is selected by providing default values (",e.jsx(n.code,{children:"''"}),")."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"No Flights Handling"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Displays a fallback message ("Journey data is not available") if the journey contains no flights.'}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Testing Support"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Includes ",e.jsx(n.code,{children:"data-testid"})," attributes for easier testing with tools like ",e.jsx(n.code,{children:"@testing-library/react"}),"."]}),`
`,e.jsx(n.li,{children:"Provides unique test IDs for the journey breakdown container and fallback message."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"component-behavior",children:"Component Behavior"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Rendering Flight Segments"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The component maps over the ",e.jsx(n.code,{children:"journey.flights"})," array to render a ",e.jsx(n.code,{children:"JourneyBreakdownItem"})," for each flight segment."]}),`
`,e.jsxs(n.li,{children:["Passes detailed flight information, such as origin, destination, departure and arrival times, terminals, and aircraft, to the ",e.jsx(n.code,{children:"JourneyBreakdownItem"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Layover Detection"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"getLayover"})," function checks if an airport code is included in the ",e.jsx(n.code,{children:"journey.layovers"})," array."]}),`
`,e.jsxs(n.li,{children:["Returns the layover airport code if it exists, or ",e.jsx(n.code,{children:"undefined"})," otherwise."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Previous Flight Arrival Time"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"getPreviousFlightArrivalTime"})," function retrieves the arrival time of the previous flight segment."]}),`
`,e.jsxs(n.li,{children:["Returns ",e.jsx(n.code,{children:"undefined"})," for the first flight segment."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Fare Information"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Extracts the fare name and fare code from the ",e.jsx(n.code,{children:"selectedFare"})," prop."]}),`
`,e.jsxs(n.li,{children:["Provides default values (",e.jsx(n.code,{children:"''"}),") if no fare is selected."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"No Flights Handling"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If the ",e.jsx(n.code,{children:"journey.flights"}),' array is empty, the component displays a fallback message: "Journey data is not available."']}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Testing"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"data-testid"})," attribute is applied to key elements for testing purposes:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Journey breakdown container: ",e.jsx(n.code,{children:"data-testid={testId}"})]}),`
`,e.jsxs(n.li,{children:["Fallback message: ",e.jsx(n.code,{children:"data-testid='journey-breakdown-alt-text'"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]})]})}function y(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{y as default};
