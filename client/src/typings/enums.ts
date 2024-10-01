export enum AUTH_LEVELS {
  UNVERIFIED = 0,
  CONTRIBUTOR = 1,
  EDITOR = 2,
  ADMINISTRATOR = 3,
}

export enum GALLERY_PAGES {
  PUBLIC = 0,
  CONTRIBUTED = 1,
  TO_REVIEW = 2,
  ALL_IMAGES = 3,
}

export enum SIZE {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export enum LTMasks {
  macule      = 0b1,
  papule      = 0b10,
  plaque      = 0b100,
  nodule      = 0b1000,

  weal        = 0b10000,
  vesicle     = 0b100000,
  bulla       = 0b1000000,
  pustule     = 0b10000000,

  crust       = 0b100000000,
  scale       = 0b1000000000,
  erosion     = 0b10000000000,
  excoriation = 0b100000000000,

  ulcer       = 0b1000000000000,
}

export enum DaCMasks {
  acral          = 0b1,
  asymmetrical   = 0b10,
  dermatomal     = 0b100,
  disseminated   = 0b1000,
  exposed        = 0b10000,

  extensor       = 0b100000,
  flexural       = 0b1000000,
  follicular     = 0b10000000,
  grouped        = 0b100000000,

  interdigital   = 0b1000000000,
  intertriginous = 0b10000000000,
  linear         = 0b100000000000,
  localized      = 0b1000000000000,

  palmoplantar   = 0b10000000000000,
  periorificial  = 0b100000000000000,
  seborrhoeic    = 0b1000000000000000,
  segmental      = 0b10000000000000000,

  symmetrical    = 0b100000000000000000,
  unilateral     = 0b1000000000000000000,
  universal      = 0b10000000000000000000,
}

export enum ShapeMasks {
  well_circumscribed   = 0b1,
  poorly_circumscribed = 0b10,
  digitate             = 0b100,
  figurate             = 0b1000,

  geometric            = 0b10000,
  guttate              = 0b100000,
  oval                 = 0b1000000,
  polygonal            = 0b10000000,

  polymorphic          = 0b100000000,
  reticulate           = 0b1000000000,
  round                = 0b10000000000,
}

export enum ColourMasks {
  black  = 0b1,
  brown  = 0b10,
  golden = 0b100,
  green  = 0b1000,

  pink   = 0b10000,
  red    = 0b100000,
  salmon = 0b1000000,
  skin   = 0b10000000,

  grey   = 0b100000000,
  tan    = 0b1000000000,
  violet = 0b10000000000,
  white  = 0b100000000000,
  
  yellow = 0b1000000000000,
}

export enum Validity {
  valid = "is-valid",
  neutral = "",
  invalid = "is-invalid",
}
