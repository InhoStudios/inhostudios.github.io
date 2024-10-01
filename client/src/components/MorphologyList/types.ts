import { ColourMasks, DaCMasks, LTMasks, ShapeMasks } from "~/typings/enums";
import { CheckboxOption } from "../CheckboxList/types";

export interface MorphologyProps {
  enabled: boolean;
  lesionType: number;
  setLesionType?: (lt: number) => void;
  distAndConfig: number;
  setDistAndConfig?: (dac: number) => void;
  shape: number;
  setShape?: (shape: number) => void;
  colour: number;
  setColour?: (col: number) => void;
  wide?: boolean;
  onlyChecked?: boolean;
}

export const lesionTypeOptions: CheckboxOption[] = [
  {
    value: LTMasks.macule,
    title: "Macule",
    checked: false,
    tooltip:
      "A flat, circumscribed, nonpalpable lesion that differs in colour from the surrounding skin. It can be any colour or shape.",
  },
  {
    value: LTMasks.papule,
    title: "Papule",
    checked: false,
    tooltip: "An elevated, solid, palpable lesion that is ≤ 1 cm in diameter.",
  },
  {
    value: LTMasks.plaque,
    title: "Plaque",
    checked: false,
    tooltip:
      "A circumscribed, palpable lesion > 1 cm in diameter; most plaques are elevated.",
  },
  {
    value: LTMasks.nodule,
    title: "Nodule",
    checked: false,
    tooltip:
      "An elevated, solid, palpable lesion > 1 cm usually located primarily in the dermis and/or subcutis.",
  },
  {
    value: LTMasks.weal,
    title: "Weal",
    checked: false,
    tooltip:
      "A transient elevation of the skin due to dermal oedema, often pale centrally with an erythematous rim.",
  },
  {
    value: LTMasks.vesicle,
    title: "Vesicle",
    checked: false,
    tooltip:
      "A circumscribed lesion ≤ 1 cm in diameter that contains liquid (clear, serous, or haemorrhagic).",
  },
  {
    value: LTMasks.bulla,
    title: "Bulla",
    checked: false,
    tooltip:
      "A circumscribed lesion > 1 cm in diameter that contains liquid (clear, serous, or haemorrhagic).",
  },
  {
    value: LTMasks.pustule,
    title: "Pustule",
    checked: false,
    tooltip: "A circumscribed lesion that contains pus.",
  },
  {
    value: LTMasks.crust,
    title: "Crust",
    checked: false,
    tooltip: "Dried serum, blood or pus on the surface of the skin.",
  },
  {
    value: LTMasks.scale,
    title: "Scale",
    checked: false,
    tooltip:
      "A visible accumulation of keratin, forming a flat plate or flake.",
  },
  {
    value: LTMasks.erosion,
    title: "Erosion",
    checked: false,
    tooltip: "Loss of either a portion of or the entire epidermis.",
  },
  {
    value: LTMasks.excoriation,
    title: "Excoriation",
    checked: false,
    tooltip:
      "A loss of the epidermis and a portion of the dermis due to scratching or an exogenous injury.",
  },
  {
    value: LTMasks.ulcer,
    title: "Ulcer",
    checked: false,
    tooltip:
      "Full-thickness loss of the epidermis plus at least a portion of the dermis; it may extend into the subcutaneous tissue.",
  },
];

export const distAndConfOptions: CheckboxOption[] = [
  {
    value: DaCMasks.acral,
    title: "Acral",
    checked: false,
    tooltip: "Lesions of distal extremities, ear, nose, penis, or nipples.",
  },
  {
    value: DaCMasks.asymmetrical,
    title: "Asymmetrical",
    checked: false,
    tooltip:
      "Lesion or distribution pattern that lacks symmetry along an axis.",
  },
  {
    value: DaCMasks.dermatomal,
    title: "Dermatomal/ Zosteriform",
    checked: false,
    tooltip:
      "Lesions confined to one or more segments of skin innervated by a single spinal nerve.",
  },
  {
    value: DaCMasks.disseminated,
    title: "Disseminated",
    checked: false,
    tooltip:
      "Lesions distributed randomly over most of the body surface area or within an anatomical region.",
  },
  {
    value: DaCMasks.exposed,
    title: "Exposed skin",
    checked: false,
    tooltip:
      "Areas exposed to external agents (chemical allergens, irritants, or physical agents), sunlight, or other forms of radiation",
  },
  {
    value: DaCMasks.extensor,
    title: "Extensor sites",
    checked: false,
    tooltip:
      "Areas overlying muscles and tendons involved in extension, as well as joints.",
  },
  {
    value: DaCMasks.flexural,
    title: "Flexural sites",
    checked: false,
    tooltip:
      "Areas overlying muscles and tendons involved in flexion of joints or the inner aspect of joints.",
  },
  {
    value: DaCMasks.follicular,
    title: "Follicular and perifollicular",
    checked: false,
    tooltip: "Lesions located within or around hair follicles",
  },
  { value: DaCMasks.grouped, title: "Grouped", checked: false },
  {
    value: DaCMasks.interdigital,
    title: "Interdigital",
    checked: false,
    tooltip: "Area between the fingers or toes.",
  },
  {
    value: DaCMasks.intertriginous,
    title: "Intertriginous",
    checked: false,
    tooltip:
      "Present in major body folds (axilla, submammary, inguinal crease, beneath pannus, intergluteal fold).",
  },
  {
    value: DaCMasks.linear,
    title: "Linear",
    checked: false,
    tooltip: "Linear arrangement of lesions.",
  },
  {
    value: DaCMasks.localized,
    title: "Localized",
    checked: false,
    tooltip: "Lesions confined to one or a few areas.",
  },
  {
    value: DaCMasks.palmoplantar,
    title: "Palmar, plantar, or palmoplantar",
    checked: false,
    tooltip: "Lesions on the palms and/or soles.",
  },
  {
    value: DaCMasks.periorificial,
    title: "Periorificial",
    checked: false,
    tooltip: "Lesions around body orifices.",
  },
  {
    value: DaCMasks.seborrhoeic,
    title: "Seborrhoeic",
    checked: false,
    tooltip: "Areas with the highest density of sebaceous glands.",
  },
  {
    value: DaCMasks.segmental,
    title: "Segmental",
    checked: false,
    tooltip: "Lesions along embryonic growth lines.",
  },
  {
    value: DaCMasks.symmetrical,
    title: "Symmetrical",
    checked: false,
    tooltip: "Lesions or patterns with symmetry along an axis.",
  },
  {
    value: DaCMasks.unilateral,
    title: "Unilateral",
    checked: false,
    tooltip:
      "Lesions confined to either the left or the right half of the body.",
  },
  {
    value: DaCMasks.universal,
    title: "Universal",
    checked: false,
    tooltip: "Involving the entire body.",
  },
];

export const shapeOptions: CheckboxOption[] = [
  {
    value: ShapeMasks.well_circumscribed,
    title: "Well circumscribed",
    checked: false,
    tooltip: "Distinct demarcation between involved and uninvolved skin.",
  },
  {
    value: ShapeMasks.poorly_circumscribed,
    title: "Poorly circumscribed",
    checked: false,
    tooltip: "Indistinct demarcation between involved and uninvolved skin.",
  },
  {
    value: ShapeMasks.digitate,
    title: "Digitate",
    checked: false,
    tooltip: "Resembles fingers.",
  },
  {
    value: ShapeMasks.figurate,
    title: "Figurate",
    checked: false,
    tooltip: "A shape or form with rounded margins.",
  },
  { value: ShapeMasks.geometric, title: "Geometric", checked: false },
  {
    value: ShapeMasks.guttate,
    title: "Guttate",
    checked: false,
    tooltip: "Small, with a shape that often resembles a droplet.",
  },
  {
    value: ShapeMasks.oval,
    title: "Oval",
    checked: false,
    tooltip: "A round shape with slight elongation.",
  },
  {
    value: ShapeMasks.polygonal,
    title: "Polygonal",
    checked: false,
    tooltip: "A lesion whose shape resembles a polygon with multiple angles.",
  },
  {
    value: ShapeMasks.polymorphic,
    title: "Polymorphic",
    checked: false,
    tooltip: "Variable sizes and shapes as well as types of lesions.",
  },
  {
    value: ShapeMasks.reticulate,
    title: "Reticulate",
    checked: false,
    tooltip: "Net-like or lacy pattern",
  },
  {
    value: ShapeMasks.round,
    title: "Round (discoid)",
    checked: false,
    tooltip: "Circular or coin-shaped.",
  },
];

export const colourOptions: CheckboxOption[] = [
  { value: ColourMasks.black, title: "Black", checked: false },
  { value: ColourMasks.brown, title: "Brown", checked: false },
  { value: ColourMasks.golden, title: "Golden", checked: false },
  { value: ColourMasks.green, title: "Green to green-black", checked: false },
  { value: ColourMasks.pink, title: "Pink", checked: false },
  { value: ColourMasks.red, title: "Red", checked: false },
  { value: ColourMasks.salmon, title: "Salmon pink", checked: false },
  { value: ColourMasks.skin, title: "Skin-coloured", checked: false },
  { value: ColourMasks.grey, title: "Slate grey", checked: false },
  { value: ColourMasks.tan, title: "Tan", checked: false },
  { value: ColourMasks.violet, title: "Violet", checked: false },
  { value: ColourMasks.white, title: "White", checked: false },
  { value: ColourMasks.yellow, title: "Yellow", checked: false },
];
