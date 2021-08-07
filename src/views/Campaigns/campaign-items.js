const campaigns = [
  {
    "id": 1,
    "status": "Current",
    "alt": "Celsius - Healthy Energy to Live Fit",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/celsius/202107_CELSIUS_VRTY_1024x555.jpg",
    "title": "Celsius",
    "subtitle": "Healthy Energy to Live Fit"
  },
  {
    "id": 2,
    "status": "Current",
    "alt": "Apple Pay - Get started with the Wallet app",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/apple-pay/apple-pay-r4-1024x555.jpg",
    "title": "Apple Pay",
    "subtitle": "Get started with the Wallet app"
  },
  {
    "id": 3,
    "status": "Current",
    "alt": "Lunchables - Lunch Combinations",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/lunchables/202107_KraftLunch_HCTC_1024x555.png",
    "title": "Lunchables",
    "subtitle": "Lunch Combinations"
  },
  {
    "id": 4,
    "status": "Past",
    "alt": "Chips Ahoy - Sweeten Your Snacktime",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/chips-ahoy/CA_Mini_Canteen+V5_1024X555.jpg",
    "title": "Chips Ahoy",
    "subtitle": "Sweeten Your Snacktime"
  },
  {
    "id": 5,
    "status": "Past",
    "alt": "Lipton Pure Leaf - Real Brewed Tea",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/lipton-pure-leaf/202106_LIPTON_VRTY_1024x555.jpg",
    "title": "Lipton Pure Leaf",
    "subtitle": "Real Brewed Tea"
  },
  {
    "id": 6,
    "status": "Past",
    "alt": "Sparkling Ice - Refreshment, Hydration and Refueling",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/sparkling-ice/202106_SPARKLING+ICE_VRTY_1024x555.jpg",
    "title": "Sparkling Ice",
    "subtitle": "Refreshment, Hydration and Refueling"
  },
  {
    "id": 7,
    "status": "Past",
    "alt": "KIND Frozen - Find it in the freezer",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/kind-frozen/kind-frozen-1024x520.jpg",
    "title": "KIND Frozen",
    "subtitle": "Find it in the freezer"
  },
  {
    "id": 8,
    "status": "Past",
    "alt": "Planters - Nuts of Distinction Since 1906",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/planters/Planters_V5+%26+Nano_15OFF.png",
    "title": "Planters",
    "subtitle": "Nuts of Distinction Since 1906"
  },
  {
    "id": 9,
    "status": "Past",
    "alt": "P3 - Portable Protein Pack",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/p3/P3_V5+%26+Nano_15OFF.png",
    "title": "P3",
    "subtitle": "Portable Protein Pack"
  },
  {
    "id": 10,
    "status": "Past",
    "alt": "VISA - Win a $100 Gift Card",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/visa/365Pay+Sweeps+(v5+Kiosk).jpg",
    "title": "VISA",
    "subtitle": "Win a $100 Gift Card"
  },
  {
    "id": 11,
    "status": "Past",
    "alt": "Pepsi Zero Sugar - Zero Sugar Done Right",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/pepsi-zero-sugar/Offer_Pepsi+Zero+Sugar+(v5).png",
    "title": "Pepsi Zero Sugar",
    "subtitle": "Zero Sugar Done Right"
  },
  {
    "id": 12,
    "status": "Past",
    "alt": "Mountain Dew Zero Sugar - Zero Sugar All Dew",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/mountain-dew-zero-sugar/NSM_MD_ZERO_DIGITAL_1024x520.png",
    "title": "Mountain Dew Zero Sugar",
    "subtitle": "Zero Sugar All Dew"
  },
  {
    "id": 13,
    "status": "Past",
    "alt": "LIFE WTR - pH Balanced Water",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/life-wtr/Life-WTR_1024x520.jpg",
    "title": "LIFE WTR",
    "subtitle": "pH Balanced Water"
  },
  {
    "id": 14,
    "status": "Past",
    "alt": "bubly - No Calories No Sweeteners All Smiles",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/bubly/NSM_BUBLY_12ozCAN_1024x520.png",
    "title": "bubly",
    "subtitle": "No Calories No Sweeteners All Smiles"
  },
  {
    "id": 15,
    "status": "Past",
    "alt": "Belvita - Outlast Your Morning",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/belvita/belVita+v5.png",
    "title": "Belvita",
    "subtitle": "Outlast Your Morning"
  },
  {
    "id": 16,
    "status": "Past",
    "alt": "Clif Bar - Nutrition for Sustained Energy",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/clif-bar/CLIF+(v5)+Final.png",
    "title": "Clif Bar",
    "subtitle": "Nutrition for Sustained Energy"
  },
  {
    "id": 17,
    "status": "Past",
    "alt": "Nature Valley - Nutrition for Sustained Energy",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/nature-valley/canteen-nature-valley-1024x520.jpg",
    "title": "Nature Valley",
    "subtitle": "Nutrition for Sustained Energy"
  },
  {
    "id": 18,
    "status": "Past",
    "alt": "Red Bull - Wings for your Summer",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/red-bull/Summer_Tablet_1024x520.jpg",
    "title": "Red Bull",
    "subtitle": "Wings for your Summer"
  },
  {
    "id": 19,
    "status": "Past",
    "alt": "Core Water - Perfectly Balanced Water",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/core-water/CORE-Water-1024.jpg",
    "title": "Core Water",
    "subtitle": "Perfectly Balanced Water"
  },
  {
    "id": 20,
    "status": "Past",
    "alt": "Bai - Get a Full Day's Serving of Flavor",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/bai/Bai-1024.jpg",
    "title": "Bai",
    "subtitle": "Get a Full Day's Serving of Flavor"
  },
  {
    "id": 21,
    "status": "Past",
    "alt": "Awake Chocloate - Chocolate & Caffeine Slay the Slump",
    "image": "https://advana-image-assets.s3.amazonaws.com/campaigns/awake-chocolate/Awake-1024.jpg",
    "title": "Awake Chocloate",
    "subtitle": "Chocolate & Caffeine Slay the Slump"
  }
];

export default campaigns;
  