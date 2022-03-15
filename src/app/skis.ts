export interface Product {
  family: string;
  category: string;
  name: string;
  size: number;
  max_height: number;
  min_height: number;
  max_weight: number,
  min_weight: number;
  ski_level: [];
  playground: [];
  ski_style: [];
  riding_speed: string;
  src : string}


export interface info {
  date :  string,
   height : number,
   weight : number ,
   ski_level : string,
   terrain : string,
   ski_style : string,
   rec_ski_1 :string,
   rec_ski_2 : string,
   rec_ski_3 : string,
}


export interface Prediction {
  prediction : number;
  name : string;
  size : number;
  weight : number;
  weight_valid : boolean
  height_valid : boolean
   ski_level_valid : boolean 
   playground_valid : boolean;
   ski_style_valid : boolean;
   riding_speed_valid : boolean ;
   src : string ; }


    export const products = [
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80 SR UL',
    size: 156,
    max_height: 166,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ul-spearhead-top.png"

  },
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80 SR UL',
    size: 164,
    max_height: 174,
    min_height: 164,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow' ,
    src : "../assets/SKIS-IMAGES/sr-ul-spearhead-top.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80 SR UL',
    size: 172,
    max_height: 182,
    min_height: 172,
    max_weight: 76,
    min_weight: 64,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
     src : "../assets/SKIS-IMAGES/sr-ul-spearhead-top.png"
  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80 SR UL',
    size: 180,
    max_height: 190,
    min_height: 180,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow' ,
     src : "../assets/SKIS-IMAGES/sr-ul-spearhead-top.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SPEARHEAD 80 SR UL',
    size: 188,
    max_height: 999,
    min_height: 188,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ul-spearhead-top.png"


  },


  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90 SR UL',
    size: 160,
    max_height: 170,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : '../assets/SKIS-IMAGES/sr-ul-cosmique-top.png'

  },
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90 SR UL',
    size: 168,
    max_height: 178,
    min_height: 168,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : '../assets/SKIS-IMAGES/sr-ul-cosmique-top.png'



  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90 SR UL',
    size: 176,
    max_height: 186,
    min_height: 176,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : '../assets/SKIS-IMAGES/sr-ul-cosmique-top.png'



  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90 SR UL',
    size: 184,
    max_height: 194,
    min_height: 184,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : '../assets/SKIS-IMAGES/sr-ul-cosmique-top.png'


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COSMIQUE 90 SR UL',
    size: 192,
    max_height: 999,
    min_height: 192,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : '../assets/SKIS-IMAGES/sr-ul-cosmique-top.png'


  },


  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100 SR UL',
    size: 162,
    max_height: 172,
    min_height: 0,
    max_weight: 55,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : '../assets/SKIS-IMAGES/sr-ul-schwarztor-top.png'


  },
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100 SR UL',
    size: 170,
    max_height: 180,
    min_height: 170,
    max_weight: 67,
    min_weight: 55,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : '../assets/SKIS-IMAGES/sr-ul-schwarztor-top.png'


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100 SR UL',
    size: 178,
    max_height: 188,
    min_height: 178,
    max_weight: 81,
    min_weight: 69,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : '../assets/SKIS-IMAGES/sr-ul-schwarztor-top.png'


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100 SR UL',
    size: 186,
    max_height: 196,
    min_height: 186,
    max_weight: 94,
    min_weight: 82,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : '../assets/SKIS-IMAGES/sr-ul-schwarztor-top.png'


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'SCHWARZTOR 100 SR UL',
    size: 194,
    max_height: 999,
    min_height: 194,
    max_weight: 999,
    min_weight: 94,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : '../assets/SKIS-IMAGES/sr-ul-schwarztor-top.png'


  }
  ,

  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: "CORBET'S 110 SR UL",
    size: 171,
    max_height: 186,
    min_height: 0,
    max_weight: 60,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ul-corbet's-top.png"


  }
  , {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: "CORBET'S 110 SR UL" ,
    size: 179,
    max_height: 184,
    min_height: 174,
    max_weight: 75,
    min_weight: 60,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ul-corbet's-top.png"


  }
  , {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: "CORBET'S 110 SR UL",
    size: 187,
    max_height: 192,
    min_height: 182,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ul-corbet's-top.png"


  }
  , {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: "CORBET'S 110 SR UL",
    size: 195,
    max_height: 999,
    min_height: 190,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ul-corbet's-top.png"


  }



  , {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: "CORBET'S 110 SR ML",
    size: 195,
    max_height: 999,
    min_height: 195,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ul-corbet's-top.png"


  },
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80 SR ML',
    size: 156,
    max_height: 166,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-whymper-top.png"


  },
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80 SR ML',
    size: 164,
    max_height: 174,
    min_height: 164,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-whymper-top.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80 SR ML',
    size: 172,
    max_height: 182,
    min_height: 172,
    max_weight: 76,
    min_weight: 64,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-whymper-top.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80 SR ML',
    size: 180,
    max_height: 190,
    min_height: 180,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-whymper-top.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'WHYMPER 80 SR ML',
    size: 188,
    max_height: 999,
    min_height: 188,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-whymper-top.png"

  }
  ,

  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90 SR ML',
    size: 160,
    max_height: 170,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-gervasutti-top.png"

  },
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90 SR ML',
    size: 168,
    max_height: 178,
    min_height: 168,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-gervasutti-top.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90 SR ML',
    size: 176,
    max_height: 186,
    min_height: 176,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-gervasutti-top.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90 SR ML',
    size: 184,
    max_height: 194,
    min_height: 184,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-gervasutti-top.png"

  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'GERVASUTTI 90 SR ML',
    size: 192,
    max_height: 999,
    min_height: 192,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-gervasutti-top.png"

  },
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'DIABLE 100 SR ML',
    size: 162,
    max_height: 172,
    min_height: 0,
    max_weight: 55,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-diable-top.png"

  },
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT SR ML',
    name: 'DIABLE 100',
    size: 170,
    max_height: 180,
    min_height: 170,
    max_weight: 67,
    min_weight: 55,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-diable-top.png"


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT SR ML',
    name: 'DIABLE 100',
    size: 178,
    max_height: 188,
    min_height: 178,
    max_weight: 81,
    min_weight: 69,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-diable-top.png"


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'DIABLE 100 SR ML',
    size: 186,
    max_height: 196,
    min_height: 186,
    max_weight: 94,
    min_weight: 82,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-diable-top.png"


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: 'DIABLE 100 SR ML',
    size: 194,
    max_height: 999,
    min_height: 194,
    max_weight: 999,
    min_weight: 94,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'piste'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-diable-top.png"


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "SPENEOER 110 SR ML",
    size: 171,
    max_height: 181,
    min_height: 0,
    max_weight: 60,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-speNEOer-top.png"


  }
  , {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "SPENEOER 110 SR ML",
    size: 179,
    max_height: 189,
    min_height: 179,
    max_weight: 75,
    min_weight: 60,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-speNEOer-top.png"


  }
  , {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "SPENEOER 110 SR ML",
    size: 187,
    max_height: 197,
    min_height: 187,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-speNEOer-top.png"


  }
  , {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "SPENEOER 110 SR ML",
    size: 195,
    max_height: 999,
    min_height: 195,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-speNEOer-top.png"


  }



  , {
    family: 'SUPER ROCKER',
    category: 'MEDIUM LIGHT',
    name: "SPENEOER 110 SR ML",
    size: 195,
    max_height: 999,
    min_height: 195,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride'],
    riding_speed: 'slow',
    src : "../assets/SKIS-IMAGES/sr-ml-speNEOer-top.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: "BONATTI 70 NEO UL",
    size: 155,
    max_height: 160,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-race'],
    ski_style: ['piste'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/BONATTI-DESIGN_Plan de travail 1.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: "BONATTI 70 NEO UL",
    size: 164,
    max_height: 169,
    min_height: 164,
    max_weight: 63,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-race'],
    ski_style: ['piste'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/BONATTI-DESIGN_Plan de travail 1.png"

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: "BONATTI 70 NEO UL",
    size: 172,
    max_height: 177,
    min_height: 172,
    max_weight: 76,
    min_weight: 63,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-race'],
    ski_style: ['piste'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/BONATTI-DESIGN_Plan de travail 1.png"

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: "BONATTI 70 NEO UL",
    size: 180,
    max_height: 999,
    min_height: 185,
    max_weight: 999,
    min_weight: 88,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-race'],
    ski_style: ['piste'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/BONATTI-DESIGN_Plan de travail 1.png"

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80 NEO UL',
    size: 156,
    max_height: 166,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-jeager-top.png"

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80 NEO UL',
    size: 164,
    max_height: 174,
    min_height: 164,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-jeager-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80 NEO UL',
    size: 172,
    max_height: 182,
    min_height: 172,
    max_weight: 76,
    min_weight: 64,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-jeager-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80 NEO UL',
    size: 180,
    max_height: 190,
    min_height: 180,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-jeager-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'JAEGER 80 NEO UL',
    size: 188,
    max_height: 999,
    min_height: 188,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-jeager-top.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90 NEO UL',
    size: 160,
    max_height: 170,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-thor-top.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90 NEO UL',
    size: 168,
    max_height: 178,
    min_height: 168,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-thor-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90 NEO UL',
    size: 176,
    max_height: 186,
    min_height: 176,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-thor-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90 NEO UL',
    size: 184,
    max_height: 194,
    min_height: 184,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-thor-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'THOR 90 NEO UL',
    size: 192,
    max_height: 999,
    min_height: 192,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-thor-top.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100 NEO UL',
    size: 162,
    max_height: 177,
    min_height: 0,
    max_weight: 55,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-couturier-top.png"


  },
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100 NEO UL',
    size: 170,
    max_height: 180,
    min_height: 170,
    max_weight: 67,
    min_weight: 55,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-couturier-top.png"


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100 NEO UL',
    size: 178,
    max_height: 188,
    min_height: 178,
    max_weight: 81,
    min_weight: 69,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-couturier-top.png"


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100 NEO UL',
    size: 186,
    max_height: 196,
    min_height: 186,
    max_weight: 94,
    min_weight: 82,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-couturier-top.png"


  }
  ,
  {
    family: 'SUPER ROCKER',
    category: 'ULTRA LIGHT',
    name: 'COUTURIER 100 NEO UL',
    size: 194,
    max_height: 999,
    min_height: 194,
    max_weight: 999,
    min_weight: 94,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-back-mountain', 'touring-mountaineering'],
    ski_style: ['powder', 'freeride', 'piste', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ul-couturier-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80 NEO ML',
    size: 156,
    max_height: 166,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-krumpe-top.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80 NEO ML',
    size: 164,
    max_height: 174,
    min_height: 164,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-krumpe-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80 NEO ML',
    size: 172,
    max_height: 182,
    min_height: 172,
    max_weight: 76,
    min_weight: 64,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-krumpe-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80 NEO ML',
    size: 180,
    max_height: 190,
    min_height: 180,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-krumpe-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'KRUMPE 80 NEO ML',
    size: 188,
    max_height: 999,
    min_height: 185,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['newbie', 'intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-krumpe-top.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANAÏDES 90 NEO ML',
    size: 160,
    max_height: 175,
    min_height: 0,
    max_weight: 50,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-danaides-top.png"

  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANAÏDES 90 NEO ML',
    size: 168,
    max_height: 178,
    min_height: 168,
    max_weight: 62,
    min_weight: 50,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-danaides-top.png"

  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANAÏDES 90 NEO ML',
    size: 176,
    max_height: 186,
    min_height: 176,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-danaides-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANAÏDES 90 NEO ML',
    size: 184,
    max_height: 194,
    min_height: 184,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-danaides-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'DANAÏDES 90 NEO ML',
    size: 192,
    max_height: 999,
    min_height: 192,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['piste', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-danaides-top.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100 NEO ML',
    size: 162,
    max_height: 172,
    min_height: 0,
    max_weight: 55,
    min_weight: 0,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-marinelli-top.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100 NEO ML',
    size: 170,
    max_height: 180,
    min_height: 170,
    max_weight: 67,
    min_weight: 55,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-marinelli-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100 NEO ML',
    size: 178,
    max_height: 188,
    min_height: 178,
    max_weight: 81,
    min_weight: 69,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-marinelli-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100 NEO ML',
    size: 186,
    max_height: 196,
    min_height: 186,
    max_weight: 94,
    min_weight: 82,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-marinelli-top.png"


  }
  ,
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDIUM LIGHT',
    name: 'MARINELLI 100 NEO ML',
    size: 194,
    max_height: 999,
    min_height: 194,
    max_weight: 999,
    min_weight: 94,
    ski_level: ['intermediate', 'confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-marinelli-top.png"


  },
  {
    family: 'NEOTERIC CAMBER',
    category: 'MEDUIM LIGHT',
    name: "MALLORY 110 NEO ML",
    size: 171,
    max_height: 181,
    min_height: 0,
    max_weight: 60,
    min_weight: 0,
    ski_level: ['confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-mallory-top.png"

  }
  , {
    family: 'NEOTERIC CAMBER',
    category: 'MEDUIM LIGHT',
    name: "MALLORY 110 NEO ML",
    size: 179,
    max_height: 189,
    min_height: 179,
    max_weight: 75,
    min_weight: 60,
    ski_level: ['confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-mallory-top.png"


  }
  , {
    family: 'NEOTERIC CAMBER',
    category: 'MEDUIM LIGHT',
    name: "MALLORY 110 NEO ML",
    size: 187,
    max_height: 197,
    min_height: 187,
    max_weight: 89,
    min_weight: 77,
    ski_level: ['confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-mallory-top.png"


  }
  , {
    family: 'NEOTERIC CAMBER',
    category: 'MEDUIM LIGHT',
    name: "MALLORY 110 NEO ML",
    size: 195,
    max_height: 999,
    min_height: 195,
    max_weight: 999,
    min_weight: 90,
    ski_level: ['confirmed', 'pro-guide'],
    playground: ['touring-front-mountain'],
    ski_style: ['powder', 'freeride', 'couloire'],
    riding_speed: 'fast',
    src : "../assets/SKIS-IMAGES/nc-ml-mallory-top.png"


  }

];