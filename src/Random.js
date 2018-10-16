// (c) 2018, The Awesome Engineering Company, https://awesomeneg.com

"use strict";

const Crypto = require("crypto");

class RandomUtils {
	integer(min,max) {
		if (!min) min = 0;
		if (!max) max = Number.MAX_SAFE_INTEGER;
		return Math.floor((Math.random()*(max-min))+min);
	}

	float(min,max) {
		if (!min) min = 0;
		if (!max) max = Number.MAX_VALUE;
		return (Math.random()*(max-min))+min;
	}

	decimal(min,max) {
		return this.float(min,max);
	}

	byte() {
		return this.integer(0,256);
	}

	character(optionalChars) {
		return optionalChars ? optionalChars[this.integer(0,optionalChars.length)] : String.fromCharCode(this.integer(32,128));
	}

	string(length,characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890") {
		if (!length || length<1) return "";
		return new Array(length).fill(0).map(()=> this.character(characters)).join("");
	}

	mountain() {
		return MOUNTAINS[this.integer(0,MOUNTAINS.length)];
	}

	uuid(bytes=16,separated=false) {
		let uuid = Crypto.rng(bytes).toString("hex");
		if (!separated) return uuid;
		return (uuid.slice(0,8)+"-"+uuid.slice(8,12)+"-"+uuid.slice(12,16)+"-"+uuid.slice(16,20)+"-"+uuid.slice(20));
	}
}

const MOUNTAINS = [
	"AnthracitePeak",
	"AntoraPeak",
	"ArgentinePeak",
	"ArrowPeak",
	"AspenMountain",
	"AtlanticPea",
	"BadgerMountain",
	"BaldMountain",
	"BardPeak",
	"BearPeak",
	"BennettPeak",
	"BerrianMountain",
	"BillWilliamsPeak",
	"BisonMountain",
	"BlancaPea",
	"BlairMountain",
	"BlancaPeak",
	"BlancoPoint",
	"BlodgettPeak",
	"BraddockPeak",
	"BuffaloPeak",
	"BushnellPeak",
	"CaliforniaPeak",
	"CapitolPeak",
	"CastlePea",
	"CarbonPeak",
	"CarbonateMountain",
	"CascoPeak",
	"CastleRock",
	"CathedralPeak",
	"ChairMountain",
	"ChalkBenchmark",
	"ChallengerPoint",
	"CheyenneMountain",
	"ChiefCheleyPeak",
	"ClarkPeak",
	"ClintonPeak",
	"ColumbiaPoint",
	"ColumbusMountain",
	"ConejosPeak",
	"ConundrumPeak",
	"CrestonePea",
	"CraterPeak",
	"CrestedButte",
	"CrestoneNeedle",
	"CrestonePeak",
	"CrestoneEastPeak",
	"CroninPeak",
	"CrystalPeak",
	"CulebraPeak",
	"DallasPeak",
	"DawsonButte",
	"DeAnzaPeak",
	"DevilsHead",
	"DevilsPlayground",
	"DiamondPeak",
	"DoloresPeak",
	"DyerMountain",
	"EastBeckwithMountain",
	"EastSpanishPeak",
	"ElDientePeak",
	"EldoradoMountain",
	"ElectricPeak",
	"ElkMountain",
	"EllingwoodPoint",
	"ElliottMountain",
	"FishersPea",
	"EmeraldPeak",
	"EngelmannPeak",
	"FairchildMountain",
	"FishersPeak",
	"FlagstaffMountain",
	"FlatTopMountain",
	"FletcherMountain",
	"FrenchMountain",
	"GarfieldPeak",
	"GeminiPea",
	"GilpinPeak",
	"GladstonePeak",
	"GraysPea",
	"GoatHill",
	"GothicMountain",
	"GrahamPeak",
	"GrandHogbac",
	"GrannysNipple",
	"GraysPeak",
	"GreenMountain",
	"GreenhornMountain",
	"GreyrockMountain",
	"GrizzlyPeak",
	"HagermanPeak",
	"HahnsPeak",
	"HaguesPeak",
	"HalfPeak",
	"HallettPeak",
	"HandiesPeak",
	"HenryMountain",
	"HesperusMountain",
	"HorseMountain",
	"HorseflyPeak",
	"HorseshoeMountain",
	"HorsetoothMountain",
	"HuerfanoButte",
	"HumboldtPeak",
	"HuntsmanRidge",
	"HuronPeak",
	"IceMountain",
	"IowaPea",
	"IronMountain",
	"ItalianMountain",
	"JacquePeak",
	"JaggedMountain",
	"JamesPeak",
	"JonesMountain",
	"LaPlataPea",
	"JupiterMountain",
	"KitCarsonMountain",
	"KnobbyCrest",
	"LaPlataPeak",
	"LavenderPeak",
	"LeadMountain",
	"LeonPeak",
	"LittleBearPeak",
	"LittleCone",
	"LizardHead",
	"LongsPea",
	"LoneCone",
	"LoneEaglePeak",
	"LongBranchBaldy",
	"LongScraggyPeak",
	"LongsPeak",
	"LookoutMountain",
	"MarcellinaMountain",
	"MaroonPeak",
	"MatchlessMountain",
	"MatterhornPeak",
	"McCurdyMountain",
	"MenefeePeak",
	"MeridianPeak",
	"MethodistMountain",
	"MiddlePeak",
	"MissouriMountain",
	"MountAdams",
	"MountAlice",
	"MountAntero",
	"MountAudubon",
	"MountBailey",
	"MountBelford",
	"MountBierstadt",
	"MountBlaurock",
	"MountBross",
	"MountBuckskin",
	"MountCameron",
	"MountCentennial",
	"MountElber",
	"MountHarvard",
	"MountLincoln",
	"MountMassive",
	"MountSneffels",
	"MountChiquita",
	"MountColumbia",
	"MountDemocrat",
	"MountEdwards",
	"MountElbert",
	"MountEmmons",
	"MountEolus",
	"MountEvans",
	"MountGuero",
	"MountGunnison",
	"MountGuyot",
	"MountHarvard",
	"MountHerard",
	"MountHope",
	"MountIda",
	"MountJackson",
	"MountJulian",
	"MountLamborn",
	"MountLincoln",
	"MountLindsey",
	"MountMassive",
	"MountMcConnel",
	"MountMeeker",
	"MountMestas",
	"MountMorrison",
	"MountoftheHolyCross",
	"MountOklahoma",
	"MountOso",
	"MountOuray",
	"MountOwen",
	"MountOxford",
	"MountParnassus",
	"MountPowell",
	"MountPrinceton",
	"MountRichthofen",
	"MountRosa",
	"MountShavano",
	"MountSherman",
	"MountSilverheels",
	"MountSneffels",
	"MountSniktau",
	"MountSopris",
	"MountSpaldin",
	"MountWerner",
	"MountWilson",
	"MountYale",
	"MountZion",
	"MountZirkel",
	"MountZwischen",
	"MummyMountain",
	"NeedleRock",
	"NiagaraPeak",
	"NokhuCrags",
	"NorthArapahoPeak",
	"NorthEolus",
	"NorthMammPeak",
	"NorthMaroonPeak",
	"NorthTableMountain",
	"OurayPeak",
	"PacificPeak",
	"ParkCone",
	"ParkviewMountain",
	"ParryPeak",
	"Peak10",
	"Peak13762",
	"PetitGrepon",
	"PikesPea",
	"PettingellPeak",
	"PhoenixPeak",
	"PigeonPeak",
	"PikesPeak",
	"PiñonMesaHighPoint",
	"PtarmiganPeak",
	"PumaPeak",
	"PyramidPeak",
	"QuandaryPeak",
	"RedMountain",
	"RedPeak",
	"RedTableMountain",
	"RedcloudPeak",
	"RioGrandePyramid",
	"RitoAltoPeak",
	"SanLuisPeak",
	"SandMountainNorth",
	"SawtoothMountain",
	"SevenUtesMountain",
	"SharkstoothPeak",
	"ShawneePeak",
	"SheepMountain",
	"SilverKingPeak",
	"SilverMountain",
	"SleepyCatPeak",
	"SnowmassMountain",
	"SnowmassPeak",
	"SouthBaldMountain",
	"SouthBrossPeak",
	"SouthRiverPeak",
	"SouthTableMountain",
	"SpecimenMountain",
	"StaticPeak",
	"StewartPeak",
	"StormKingMountain",
	"StormPeak",
	"SultanMountain",
	"SummitPeak",
	"SunlightPeak",
	"SunlightSpire",
	"SunshinePeak",
	"TabeguachePeak",
	"TanksPeak",
	"TaylorPeak",
	"TeakettleMountain",
	"TerribleMountai",
	"TheDiamond",
	"TheHorns",
	"TheSawtooth",
	"ThirtynineMileMountain",
	"ThunderButte",
	"TijerasPeak",
	"TomichiDome",
	"TorreysPeak",
	"TowerMountain",
	"TraverPea",
	"TreasureMountain",
	"TrinityPeak",
	"UncompahgrePeak",
	"SpanishPeaks",
	"TurretPeak",
	"TwilightPeak",
	"TwinSistersPeaks",
	"TwoButtes",
	"UncompahgrePeak",
	"UtePeak",
	"VermilionPeak",
	"VestalPeak",
	"WaughMountain",
	"WestBuffaloPeak",
	"WestElkPeak",
	"WestSpanishPeak",
	"WetterhornPeak",
	"WhetstoneMountain",
	"WilliamsPeak",
	"WilsonPeak",
	"WindomPeak",
	"WindyPeak",
	"WinfieldPeak",
	"YpsilonMountain",
	"ZenobiaPeak",
];

module.exports = new RandomUtils();
