(this.webpackJsonpbotwrando=this.webpackJsonpbotwrando||[]).push([[0],{11:function(e,a,o){e.exports=o(29)},24:function(e,a){},26:function(e,a,o){},27:function(e,a,o){},28:function(e,a,o){},29:function(e,a,o){"use strict";o.r(a);var n=o(0),i=o.n(n),t=o(9),s=o.n(t),l=o(7),d=o(6);function r(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=a?e:0,n=a||e,i=Object(l.a)(Array.from(Array(n-o+1).keys()));return i.map((function(e){return o+e}))}function c(e){var a=[38,41,9,65],o=[78],n=[97],i=r(119).filter((function(e){return i=e,-1===a.indexOf(i)&&-1===o.indexOf(i)&&-1===n.indexOf(i);var i})),t=r(80,118),s=Object(d.shuffle)(t,e)[0],c=[];return c.push.apply(c,Object(l.a)(Object(d.shuffle)(a,e))),c.push.apply(c,Object(l.a)(Object(d.shuffle)(i,e))),c.splice(s,0,97),c}var f=o(2),u=o(1);var m,_={add_split:{desc:"Start the run / add a split"},undo_split:{desc:"Undo last split"},skip_split:{desc:"Skip a split"},reset_splits:{desc:"Reset the run"},pause:{desc:"Pause the timer"},show_help:{desc:"Show / hide help"},toggle_blood_moon:{desc:"Toggle Blood Moon shrine"}},p=Object(f.a)({},{Space:"add_split",Backspace:"undo_split",Period:"skip_split",KeyR:"reset_splits",KeyP:"pause",KeyH:"show_help",KeyB:"toggle_blood_moon"},{},{Numpad1:"add_split",Numpad8:"undo_split",Numpad2:"skip_split",Numpad3:"reset_splits",Numpad5:"pause"},{},{NumpadAdd:"add_split",NumpadSubtract:"undo_split",NumpadDivide:"skip_split",KeyQ:"reset_splits",NumpadMultiply:"pause"},{},{F1:"add_split",F4:"undo_split",F5:"skip_split",F3:"reset_splits",F6:"pause"}),g=/Key(.+)/,h=/Numpad(.+)/,x={Add:"+",Subtract:"-",Divide:"/",Multiply:"*",Period:"."},b=function(){var e=p;return function(e,a){var o=new Map;return e.forEach((function(e){var n=a(e),i=o.get(n);i?i.push(e):o.set(n,[e])})),o}(Object.entries(e),(function(e){var a=Object(u.a)(e,2),o=(a[0],a[1]);return _[o].desc}))},y=(o(26),function(e){var a=b();return i.a.createElement(i.a.Fragment,null,Array.from(a).map((function(e){var a=Object(u.a)(e,2),o=a[0],n=a[1],t=n.map((function(e){return e[0]}));return i.a.createElement("div",{className:"hotkey",key:n.toString()},i.a.createElement("div",{className:"keys"}," ",t.map((function(e){return i.a.createElement("div",{className:"key",key:e.toString()},function(e){var a=e;Object.entries(x).map((function(e){var o=Object(u.a)(e,2),n=o[0],i=o[1];a=a.replace(n,i)}));var o=g.exec(a);if(o&&o.length>0)return o[1];var n=h.exec(a);if(n&&n.length>0){var i=n[1];return"Num ".concat(i)}return a}(e.toString()))}))),i.a.createElement("div",{className:"desc"},o))})))}),z=function(e){return S.find((function(a){return a.index===e}))},S=[{index:38,name:"Oman Au",desc:"Magnesis Trial",region:"Great plateau",location:{x:"-667.3707f",y:"173.1039f",z:"1517.671f"},is_blood_moon:!1,is_plateau:!0},{index:41,name:"Ja Baij",desc:"Bomb Trial",region:"Great plateau",location:{x:"-454.1951f",y:"180.0318f",z:"1990.182f"},is_blood_moon:!1,is_plateau:!0},{index:9,name:"Owa Daim",desc:"Stasis Trial",region:"Great plateau",location:{x:"-925.0303f",y:"274.1815f",z:"2313.729f"},is_blood_moon:!1,is_plateau:!0},{index:65,name:"Keh Namut",desc:"Cryonis Trial",region:"Great plateau",location:{x:"-1429.157f",y:"337.59f",z:"1988.853f"},is_blood_moon:!1,is_plateau:!0},{index:7,name:"Bosh Kala",desc:"The Wind Guides You",region:"Dueling peaks",location:{x:"87.01651f",y:"122.5279f",z:"1651.206f"},is_blood_moon:!1,is_plateau:!1},{index:15,name:"Toto Sah",desc:"Toto Sah Apparatus",region:"Dueling peaks",location:{x:"1852.462f",y:"131.5204f",z:"2471f"},is_blood_moon:!1,is_plateau:!1},{index:17,name:"Shee Vaneer",desc:"Twin Memories",region:"Dueling peaks",location:{x:"1272.769f",y:"525.882f",z:"1938.7f"},is_blood_moon:!1,is_plateau:!1},{index:47,name:"Ree Dahee",desc:"Timing Is Critical",region:"Dueling peaks",location:{x:"1279.318f",y:"137.688f",z:"1845.038f"},is_blood_moon:!1,is_plateau:!1},{index:44,name:"Shee Venath",desc:"Twin Memories",region:"Dueling peaks",location:{x:"1251.555f",y:"443.3821f",z:"1851.348f"},is_blood_moon:!1,is_plateau:!1},{index:45,name:"Ha Dahamar",desc:"The Water Guides",region:"Dueling peaks",location:{x:"1666.934f",y:"115.5371f",z:"1927.545f"},is_blood_moon:!1,is_plateau:!1},{index:99,name:"Ta'loh Naeg",desc:"Ta'loh Naeg's Teaching",region:"Dueling peaks",location:{x:"1836.687f",y:"260.1112f",z:"895.7665f"},is_blood_moon:!1,is_plateau:!1},{index:29,name:"Hila Rao",desc:"Drifting",region:"Dueling peaks",location:{x:"849.2506f",y:"116.9448f",z:"843.1727f"},is_blood_moon:!1,is_plateau:!1},{index:112,name:"Lakna Rokee",desc:"Lakna Rokee's Blessing",region:"Dueling peaks",location:{x:"2033.633f",y:"286.0163f",z:"968.0991f"},is_blood_moon:!1,is_plateau:!1},{index:82,name:"Chaas Qeta",desc:"A Major Test of Strength",region:"Hateno",location:{x:"4006.887f",y:"107.1959f",z:"2985.234f"},is_blood_moon:!1,is_plateau:!1},{index:39,name:"Myahm Agana",desc:"Myahm Agana Apparatus",region:"Hateno",location:{x:"3383.111f",y:"242.6054f",z:"2210.534f"},is_blood_moon:!1,is_plateau:!1},{index:119,name:"Tahno O'ah",desc:"Tahno O'ah's Blessing",region:"Hateno",location:{x:"4189.166f",y:"288.1624f",z:"1685.43f"},is_blood_moon:!1,is_plateau:!1},{index:117,name:"Jitan Sa'mi",desc:"Jitan Sa'mi's Blessing",region:"Hateno",location:{x:"3888.919f",y:"572.8215f",z:"1318.108f"},is_blood_moon:!1,is_plateau:!1},{index:19,name:"Dow Na'eh",desc:"Three Boxes",region:"Hateno",location:{x:"2691.018f",y:"220.9526f",z:"1329.986f"},is_blood_moon:!1,is_plateau:!1},{index:14,name:"Kam Urog",desc:"Trial of Passage",region:"Hateno",location:{x:"2506.42f",y:"119.1525f",z:"1500.751f"},is_blood_moon:!1,is_plateau:!1},{index:24,name:"Mezza Lo",desc:"Ancient Trifecta",region:"Hateno",location:{x:"2621.749f",y:"249.373f",z:"386.233f"},is_blood_moon:!1,is_plateau:!1},{index:33,name:"Daka Tuss",desc:"Sunken Scoop",region:"Lanayru",location:{x:"1607.245f",y:"117.713f",z:"466.3539f"},is_blood_moon:!1,is_plateau:!1},{index:49,name:"Kaya Wan",desc:"Shields from Water",region:"Lanayru",location:{x:"831.4077f",y:"132.8904f",z:"185.6969f"},is_blood_moon:!1,is_plateau:!1},{index:70,name:"Soh Kofi",desc:"A Minor Test of Strength",region:"Lanayru",location:{x:"2244.385f",y:"148.4889f",z:"-288.4922f"},is_blood_moon:!1,is_plateau:!1},{index:23,name:"Sheh Rata",desc:"Speed of Light",region:"Lanayru",location:{x:"1503.202f",y:"128.4185f",z:"-378.9013f"},is_blood_moon:!1,is_plateau:!1},{index:16,name:"Rucco Maag",desc:"Five Flames",region:"Lanayru",location:{x:"3333.5f",y:"119.013f",z:"409f"},is_blood_moon:!1,is_plateau:!1},{index:114,name:"Shai Yota",desc:"Shai Yota's Blessing",region:"Lanayru",location:{x:"4243.152f",y:"110.9068f",z:"260.5872f"},is_blood_moon:!1,is_plateau:!1},{index:101,name:"Dagah Keek",desc:"Dagah Keek's Blessing",region:"Lanayru",location:{x:"3142.916f",y:"279.9849f",z:"-421.0394f"},is_blood_moon:!1,is_plateau:!1},{index:5,name:"Ne'ez Yohma",desc:"Pushing Power",region:"Lanayru",location:{x:"3320.508f",y:"239.2957f",z:"-511.9885f"},is_blood_moon:!1,is_plateau:!1},{index:66,name:"Kah Mael",desc:"Drop and Rise",region:"Lanayru",location:{x:"4704.447f",y:"242.5114f",z:"-1304.481f"},is_blood_moon:!1,is_plateau:!1},{index:115,name:"Rona Kachta",desc:"Rona Kachta's Blessing",region:"Woodland",location:{x:"-1092.978f",y:"22.06107f",z:"-2655.765f"},is_blood_moon:!1,is_plateau:!1},{index:11,name:"Monya Toma",desc:"Drawing Parabolas",region:"Woodland",location:{x:"-1493.373f",y:"275.2352f",z:"-1478.82f"},is_blood_moon:!1,is_plateau:!1},{index:95,name:"Kuhn Sidajj",desc:"Kuhn Sidajj's Blessing",region:"Woodland",location:{x:"23.47992f",y:"281.3849f",z:"-1938.842f"},is_blood_moon:!1,is_plateau:!1},{index:98,name:"Daag Chokah",desc:"Daag Chokah's Blessing",region:"Woodland",location:{x:"-23.80997f",y:"280.3546f",z:"-2451.597f"},is_blood_moon:!1,is_plateau:!1},{index:22,name:"Keo Ruug",desc:"Fateful Stars",region:"Woodland",location:{x:"472.5916f",y:"250.1614f",z:"-2161.527f"},is_blood_moon:!1,is_plateau:!1},{index:106,name:"Maag Halan",desc:"Maag Halan's Blessing",region:"Woodland",location:{x:"833.8867f",y:"282.2083f",z:"-2412.92f"},is_blood_moon:!1,is_plateau:!1},{index:108,name:"Ketoh Wawai",desc:"Ketoh Wawai's Blessing",region:"Woodland",location:{x:"291.4f",y:"285.2849f",z:"-3119.6f"},is_blood_moon:!1,is_plateau:!1},{index:56,name:"Mirro Shaz",desc:"Tempered Power",region:"Woodland",location:{x:"1224.498f",y:"127.5614f",z:"-1212.611f"},is_blood_moon:!1,is_plateau:!1},{index:72,name:"Dah Kaso",desc:"A Minor Test of Strength",region:"Central",location:{x:"-1698.461f",y:"68.85024f",z:"1706.917f"},is_blood_moon:!1,is_plateau:!1},{index:27,name:"Rota Ooh",desc:"Passing of the Gates",region:"Central",location:{x:"-1556.068f",y:"186.7413f",z:"1307.912f"},is_blood_moon:!1,is_plateau:!1},{index:57,name:"Wahgo Katta",desc:"Metal Connections",region:"Central",location:{x:"349.9664f",y:"123.0927f",z:"1012.573f"},is_blood_moon:!1,is_plateau:!1},{index:40,name:"Kaam Ya'tak",desc:"Trial of Power",region:"Central",location:{x:"-966.6039f",y:"127.6782f",z:"723.2963f"},is_blood_moon:!1,is_plateau:!1},{index:73,name:"Katah Chuki",desc:"A Minor Test of Strength",region:"Central",location:{x:"-633.9728f",y:"128.8799f",z:"-338.0173f"},is_blood_moon:!1,is_plateau:!1},{index:74,name:"Noya Neha",desc:"A Minor Test of Strength",region:"Central",location:{x:"-958.6191f",y:"134.3756f",z:"-624.722f"},is_blood_moon:!1,is_plateau:!1},{index:89,name:"Saas Ko'sah",desc:"A Major Test of Strength",region:"Central",location:{x:"-155.3952f",y:"144.2066f",z:"-1159.346f"},is_blood_moon:!1,is_plateau:!1},{index:79,name:"Namika Ozz",desc:"A Modest Test of Strength",region:"Central",location:{x:"753.8152f",y:"188.7375f",z:"-821.9541f"},is_blood_moon:!1,is_plateau:!1},{index:69,name:"Ishto Soh",desc:"Bravery's Grasp",region:"Lake",location:{x:"-992.2885f",y:"321.2284f",z:"3564.887f"},is_blood_moon:!1,is_plateau:!1},{index:80,name:"Shoqa Tatone",desc:"A Modest Test of Strength",region:"Lake",location:{x:"101.987f",y:"110.6568f",z:"3840.544f"},is_blood_moon:!1,is_plateau:!1},{index:54,name:"Ka'o Makagh",desc:"Metal Doors Open the Way",region:"Lake",location:{x:"520.7914f",y:"178.9204f",z:"3519.195f"},is_blood_moon:!1,is_plateau:!1},{index:71,name:"Pumaag Nitae",desc:"A Minor Test of Strength",region:"Lake",location:{x:"558.3131f",y:"118.0507f",z:"2997.593f"},is_blood_moon:!1,is_plateau:!1},{index:68,name:"Ya Naga",desc:"Shatter the Heavens",region:"Lake",location:{x:"-335.572f",y:"68.03526f",z:"2599.015f"},is_blood_moon:!1,is_plateau:!1},{index:113,name:"Shae Katha",desc:"Shae Katha's Blessing",region:"Lake",location:{x:"871.5115f",y:"123.0039f",z:"2335.948f"},is_blood_moon:!1,is_plateau:!1},{index:50,name:"Shai Utoh",desc:"Halt the Tilt",region:"Faron",location:{x:"1584.152f",y:"167.0076f",z:"3607.884f"},is_blood_moon:!1,is_plateau:!1},{index:96,name:"Qukah Nata",desc:"Qukah Nata's Blessing",region:"Faron",location:{x:"2013.756f",y:"301.5088f",z:"3281.743f"},is_blood_moon:!1,is_plateau:!1},{index:61,name:"Shoda Sah",desc:"Impeccable Timing",region:"Faron",location:{x:"1788.795f",y:"189.808f",z:"2999.198f"},is_blood_moon:!1,is_plateau:!1},{index:111,name:"Tawa Jinn",desc:"Tawa Jinn's Blessing",region:"Faron",location:{x:"2630.794f",y:"318.1523f",z:"2830.081f"},is_blood_moon:!1,is_plateau:!1},{index:6,name:"Yah Rin",desc:"A Weighty Decision",region:"Faron",location:{x:"2834.661f",y:"152.7675f",z:"3318.359f"},is_blood_moon:!1,is_plateau:!1},{index:34,name:"Kah Yah",desc:"Quick Thinking",region:"Faron",location:{x:"3440.02f",y:"120.6614f",z:"3323.639f"},is_blood_moon:!1,is_plateau:!1},{index:81,name:"Muwo Jeem",desc:"A Modest Test of Strength",region:"Faron",location:{x:"3650.895f",y:"350.3494f",z:"3306.286f"},is_blood_moon:!1,is_plateau:!1},{index:97,name:"Korgu Chideh",desc:"Korgu Chideh's Blessing",region:"Faron",location:{x:"4730.556f",y:"217.985f",z:"3768.092f"},is_blood_moon:!1,is_plateau:!1},{index:78,name:"Mijah Rokee",desc:"A Modest Test of Strength",region:"Ridgeland",location:{x:"-2749.048f",y:"309.3784f",z:"220.9057f"},is_blood_moon:!0,is_plateau:!1},{index:37,name:"Shae Loya",desc:"Aim for the Moment",region:"Ridgeland",location:{x:"-2929.747f",y:"306.459f",z:"-439.459f"},is_blood_moon:!1,is_plateau:!1},{index:20,name:"Sheem Dagoze",desc:"Moving in Parallel",region:"Ridgeland",location:{x:"-1886.236f",y:"212.3849f",z:"87.74423f"},is_blood_moon:!1,is_plateau:!1},{index:58,name:"Mogg Latan",desc:"Synced Swing",region:"Ridgeland",location:{x:"-2300.074f",y:"439.5814f",z:"467.7474f"},is_blood_moon:!1,is_plateau:!1},{index:4,name:"Zalta Wa",desc:"Two Orbs to Guide You",region:"Ridgeland",location:{x:"-1434.68f",y:"138.332f",z:"-587.0825f"},is_blood_moon:!1,is_plateau:!1},{index:92,name:"Maag No'rah",desc:"Maag No'rah's Blessing",region:"Ridgeland",location:{x:"-1944.202f",y:"249.8943f",z:"-1464.344f"},is_blood_moon:!1,is_plateau:!1},{index:21,name:"Toh Yahsa",desc:"Buried Secrets",region:"Ridgeland",location:{x:"-2269.1f",y:"216.5644f",z:"-908.1f"},is_blood_moon:!1,is_plateau:!1},{index:53,name:"Sha Warvo",desc:"Path of Hidden Winds",region:"Tabantha",location:{x:"-3816.756f",y:"265.1334f",z:"-2210.389f"},is_blood_moon:!1,is_plateau:!1},{index:12,name:"Voo Lota",desc:"The Winding Route",region:"Tabantha",location:{x:"-4009.628f",y:"275.1873f",z:"-1726.501f"},is_blood_moon:!1,is_plateau:!1},{index:35,name:"Akh Va'quot",desc:"Windmills",region:"Tabantha",location:{x:"-3655.409f",y:"321.7578f",z:"-1764.17f"},is_blood_moon:!1,is_plateau:!1},{index:8,name:"Bareeda Naag",desc:"Cannon",region:"Tabantha",location:{x:"-3607.533f",y:"246.7223f",z:"-1523.225f"},is_blood_moon:!1,is_plateau:!1},{index:83,name:"Tena Ko'sah",desc:"A Major Test of Strength",region:"Tabantha",location:{x:"-3472.089f",y:"384.5054f",z:"-444.4357f"},is_blood_moon:!1,is_plateau:!1},{index:59,name:"Kah Okeo",desc:"Wind Guide",region:"Tabantha",location:{x:"-4127.804f",y:"184.3011f",z:"-413.0951f"},is_blood_moon:!1,is_plateau:!1},{index:88,name:"Hia Miu",desc:"A Major Test of Strength",region:"Hebra",location:{x:"-4440.92f",y:"329.8666f",z:"-3798.386f"},is_blood_moon:!1,is_plateau:!1},{index:118,name:"To Quomo",desc:"To Quomo's Blessing",region:"Hebra",location:{x:"-4015.638f",y:"288.1042f",z:"-3712.072f"},is_blood_moon:!1,is_plateau:!1},{index:87,name:"Mozo Shenno",desc:"A Major Test of Strength",region:"Hebra",location:{x:"-3620.214f",y:"420.8361f",z:"-3038.48f"},is_blood_moon:!1,is_plateau:!1},{index:46,name:"Shada Naw",desc:"Red Giveaway",region:"Hebra",location:{x:"-2996.261f",y:"667.7664f",z:"-3214.465f"},is_blood_moon:!1,is_plateau:!1},{index:18,name:"Rok Uwog",desc:"Power of Reach",region:"Hebra",location:{x:"-2370.573f",y:"485.9271f",z:"-3223.752f"},is_blood_moon:!1,is_plateau:!1},{index:62,name:"Sha Gehma",desc:"Shift and Lock",region:"Hebra",location:{x:"-1667.072f",y:"346.5799f",z:"-3762.813f"},is_blood_moon:!1,is_plateau:!1},{index:116,name:"Qaza Tokki",desc:"Qaza Tokki's Blessing",region:"Hebra",location:{x:"-828f",y:"341.313f",z:"-3535f"},is_blood_moon:!1,is_plateau:!1},{index:86,name:"Goma Asaagh",desc:"A Major Test of Strength",region:"Hebra",location:{x:"-2799.569f",y:"671.0319f",z:"-2880.443f"},is_blood_moon:!1,is_plateau:!1},{index:51,name:"Maka Rah",desc:"Steady Thy Heart",region:"Hebra",location:{x:"-4065.297f",y:"94.90372f",z:"-2507.55f"},is_blood_moon:!1,is_plateau:!1},{index:55,name:"Dunba Taag",desc:"Build and Release",region:"Hebra",location:{x:"-2829.413f",y:"79.888f",z:"-1571.196f"},is_blood_moon:!1,is_plateau:!1},{index:104,name:"Lanno Kooh",desc:"Lanno Kooh's Blessing",region:"Hebra",location:{x:"-2639.211f",y:"446.0452f",z:"-2067.302f"},is_blood_moon:!1,is_plateau:!1},{index:52,name:"Gee Ha'rah",desc:"Tandem",region:"Hebra",location:{x:"-2384.204f",y:"278.1229f",z:"-2260.689f"},is_blood_moon:!1,is_plateau:!1},{index:42,name:"Rin Oyaa",desc:"Directing the Wind",region:"Hebra",location:{x:"-1713.984f",y:"335.7542f",z:"-2555.731f"},is_blood_moon:!1,is_plateau:!1},{index:3,name:"Hawa Koth",desc:"The Current Solution",region:"Wasteland",location:{x:"-4850.02f",y:"123.756f",z:"3779.511f"},is_blood_moon:!1,is_plateau:!1},{index:63,name:"Kema Zoos",desc:"A Delayed Puzzle",region:"Wasteland",location:{x:"-4673.53f",y:"132.133f",z:"1975.29f"},is_blood_moon:!1,is_plateau:!1},{index:94,name:"Tho Kayu",desc:"Tho Kayu's Blessing",region:"Wasteland",location:{x:"-4791.229f",y:"135.1122f",z:"2798.968f"},is_blood_moon:!1,is_plateau:!1},{index:93,name:"Raqa Zunzo",desc:"Raqa Zunzo's Blessing",region:"Wasteland",location:{x:"-3802.982f",y:"159.2849f",z:"3124.464f"},is_blood_moon:!1,is_plateau:!1},{index:107,name:"Misae Suma",desc:"Misae Suma's Blessing",region:"Wasteland",location:{x:"-2966.55f",y:"137.6864f",z:"3775.005f"},is_blood_moon:!1,is_plateau:!1},{index:103,name:"Dila Maag",desc:"Dila Maag's Blessing",region:"Wasteland",location:{x:"-1795f",y:"164.1974f",z:"3457.891f"},is_blood_moon:!1,is_plateau:!1},{index:110,name:"Korsh O'hu",desc:"Korsh O'hu's Blessing",region:"Wasteland",location:{x:"-2694.257f",y:"104.9903f",z:"2816.857f"},is_blood_moon:!1,is_plateau:!1},{index:10,name:"Kay Noh",desc:"Power of Electricity",region:"Wasteland",location:{x:"-2803.496f",y:"172.0212f",z:"2300.776f"},is_blood_moon:!1,is_plateau:!1},{index:32,name:"Dako Tah",desc:"Electric Path",region:"Wasteland",location:{x:"-3310.432f",y:"146.1268f",z:"2163.97f"},is_blood_moon:!1,is_plateau:!1},{index:90,name:"Suma Sahma",desc:"Suma Sahma's Blessing",region:"Wasteland",location:{x:"-1414.819f",y:"545.3849f",z:"3455.551f"},is_blood_moon:!1,is_plateau:!1},{index:1,name:"Jee Noh",desc:"On the Move",region:"Wasteland",location:{x:"-1796.033f",y:"112.8661f",z:"2416.61f"},is_blood_moon:!1,is_plateau:!1},{index:60,name:"Daqo Chisay",desc:"The Whole Picture",region:"Wasteland",location:{x:"-3811.651f",y:"150.4598f",z:"2814.629f"},is_blood_moon:!1,is_plateau:!1},{index:100,name:"Keeha Yoog",desc:"Keeha Yoog's Blessing",region:"Gerudo",location:{x:"-3845.882f",y:"640.2849f",z:"713.9639f"},is_blood_moon:!1,is_plateau:!1},{index:43,name:"Kuh Takkar",desc:"Melting Ice Hazard",region:"Gerudo",location:{x:"-3087.598f",y:"571.5641f",z:"1226.925f"},is_blood_moon:!1,is_plateau:!1},{index:85,name:"Kema Kosassa",desc:"A Major Test of Strength",region:"Gerudo",location:{x:"-4651.049f",y:"619.5056f",z:"905.8175f"},is_blood_moon:!1,is_plateau:!1},{index:76,name:"Sasa Kai",desc:"A Modest Test of Strength",region:"Gerudo",location:{x:"-3563.698f",y:"352.7617f",z:"1959.986f"},is_blood_moon:!1,is_plateau:!1},{index:30,name:"Joloo Nah",desc:"Joloo Nah Apparatus",region:"Gerudo",location:{x:"-2004.008f",y:"231.6321f",z:"1682.263f"},is_blood_moon:!1,is_plateau:!1},{index:36,name:"Sho Dantu",desc:"Two Bombs",region:"Gerudo",location:{x:"-3906.112f",y:"395.9859f",z:"1647.67f"},is_blood_moon:!1,is_plateau:!1},{index:28,name:"Shora Hah",desc:"Blue Flame",region:"Eldin",location:{x:"1541.58f",y:"507.3476f",z:"-3113.807f"},is_blood_moon:!1,is_plateau:!1},{index:64,name:"Daqa Koh",desc:"Stalled Flight",region:"Eldin",location:{x:"2059.286f",y:"598.0244f",z:"-2324.726f"},is_blood_moon:!1,is_plateau:!1},{index:67,name:"Qua Raym",desc:"A Balanced Approach",region:"Eldin",location:{x:"1816.991f",y:"388.2992f",z:"-1523.532f"},is_blood_moon:!1,is_plateau:!1},{index:0,name:"Tah Muhl",desc:"Passing the Flame",region:"Eldin",location:{x:"2306.683f",y:"213.3612f",z:"-936.853f"},is_blood_moon:!1,is_plateau:!1},{index:31,name:"Mo'a Keet",desc:"Metal Makes a Path",region:"Eldin",location:{x:"2720.352f",y:"285.4244f",z:"-1159.267f"},is_blood_moon:!1,is_plateau:!1},{index:2,name:"Sah Dahaj",desc:"Power of Fire",region:"Eldin",location:{x:"2672.026f",y:"247.925f",z:"-1577.614f"},is_blood_moon:!1,is_plateau:!1},{index:91,name:"Gorae Torr",desc:"Gorae Torr's Blessing",region:"Eldin",location:{x:"2667.303f",y:"470.013f",z:"-3461.803f"},is_blood_moon:!1,is_plateau:!1},{index:25,name:"Kayra Mah",desc:"Greedy Hill",region:"Eldin",location:{x:"2069.331f",y:"520.7816f",z:"-2039.409f"},is_blood_moon:!1,is_plateau:!1},{index:26,name:"Shae Mo'sah",desc:"Swinging Flames",region:"Eldin",location:{x:"1752.358f",y:"535.3334f",z:"-2556.751f"},is_blood_moon:!1,is_plateau:!1},{index:102,name:"Zuna Kai",desc:"Zuna Kai's Blessing",region:"Akkala",location:{x:"3321.652f",y:"298.699f",z:"-3427.396f"},is_blood_moon:!1,is_plateau:!1},{index:48,name:"Ze Kasho",desc:"Ze Kasho Apparatus",region:"Akkala",location:{x:"3034.709f",y:"348.6595f",z:"-1669.085f"},is_blood_moon:!1,is_plateau:!1},{index:77,name:"Ke'nai Shakah",desc:"A Modest Test of Strength",region:"Akkala",location:{x:"4196.178f",y:"323.1274f",z:"-849.5751f"},is_blood_moon:!1,is_plateau:!1},{index:109,name:"Ritaag Zumo",desc:"Ritaag Zumo's Blessing",region:"Akkala",location:{x:"4528.136f",y:"107.7508f",z:"-2134.671f"},is_blood_moon:!1,is_plateau:!1},{index:84,name:"Tutsuwa Nima",desc:"A Major Test of Strength",region:"Akkala",location:{x:"3773.559f",y:"108.9004f",z:"-2698.722f"},is_blood_moon:!1,is_plateau:!1},{index:105,name:"Tu Ka'loh",desc:"Tu Ka'loh's Blessing",region:"Akkala",location:{x:"4655f",y:"237.413f",z:"-3702.5f"},is_blood_moon:!1,is_plateau:!1},{index:75,name:"Dah Hesho",desc:"A Minor Test of Strength",region:"Akkala",location:{x:"3900.82f",y:"354.7871f",z:"-1310.195f"},is_blood_moon:!1,is_plateau:!1},{index:13,name:"Katosa Aug",desc:"Katosa Aug Apparatus",region:"Akkala",location:{x:"4289.157f",y:"237.4321f",z:"-2726.834f"},is_blood_moon:!1,is_plateau:!1}],v=o(10),k=(o(27),o(31)),T=function(e,a){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e>=0?a||"":"-",i=function(a){return"".concat(n).concat(Object(k.a)(e,a))};return i(e>=864e5?o?"d H:mm:ss.SS":"d H:mm":e>=36e5?o?"H:mm:ss.SS":"H:mm:ss":e>=6e4?o?"mm:ss.SS":"mm:ss":"s.SS")},E=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"--:--",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return-1!==e?T(e,o):a},j=function(e){var a=z(e.shrine_id),o=e.diff?E(e.diff,"--","+"):"",n=E(e.timestamp),t=["diff"];return e.is_ahead&&t.push("is-ahead"),e.is_pb&&t.push("is-pb"),i.a.createElement("div",{className:"shrine infolog"},i.a.createElement("div",{className:"counter"},e.counter+1),i.a.createElement("div",{className:"name"},null===a||void 0===a?void 0:a.name),i.a.createElement("div",{className:t.join(" ")},o),i.a.createElement("div",{className:"time"},n))},A=function(e){var a=e.run;return i.a.createElement("div",{className:"history"},i.a.createElement(v.a,{forceScroll:!0,className:"historylist"},a.shrine_ids.filter((function(e,o){return function(e){return a.splits.get(e)}(o)})).map((function(e,o){return function(e,a,o,n,t){return i.a.createElement(j,{key:e,shrine_id:e,counter:a,timestamp:o,diff:n,is_ahead:n<=0,is_pb:t})}(e,o,function(e){var o=a.splits.get(e);return o||-1}(o),function(e){var o=a.splits.get(e),n=a.wr_splits.get(e);return o&&n?o-n:-1}(o),function(e){var o=a.splits.get(e),n=a.pb_splits.get(e);return!(!o||!n)&&o-n<0}(o))}))))},M=function(e){var a=i.a.useState({startedAt:-1,pausedAt:-1}),o=Object(u.a)(a,2),n=o[0],t=o[1],s=i.a.useState(0),l=Object(u.a)(s,2),d=l[0],r=l[1],c=i.a.useState(0),_=Object(u.a)(c,2),p=_[0],g=_[1],h=i.a.useRef(-1),x=function(a){e.runstate===m.Default&&(r(0),g(-1)),e.runstate===m.Running?(-1===n.startedAt&&t((function(e){return Object(f.a)({},e,{startedAt:Date.now()})})),-1!==n.pausedAt&&(g((function(e){return e+Date.now()-n.pausedAt})),e.onUpdatePausedTime(p),t((function(e){return Object(f.a)({},e,{pausedAt:-1})}))),r(Date.now()-e.timestamp-p)):e.runstate===m.Paused&&(n.startedAt,-1===n.pausedAt&&t((function(e){return{startedAt:-1,pausedAt:Date.now()}})))};return i.a.useEffect((function(){return h.current=requestAnimationFrame(x),function(){return cancelAnimationFrame(h.current)}})),i.a.useEffect((function(){e.onUpdatePausedTime(p)}),[p]),i.a.createElement(i.a.Fragment,null,function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"--:--",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return-1!==e?T(e,o,!0):a}(d))},O=function(e){var a=Object(n.useState)(-1),o=Object(u.a)(a,2),t=o[0],s=o[1],l=Object(n.useState)(["time"]),d=Object(u.a)(l,2),r=d[0],c=d[1],f=e.run,_=e.currentShrine,p=f.shrine_ids[_],g=z(p);return Object(n.useEffect)((function(){s(f.rundate)}),[f.rundate]),Object(n.useEffect)((function(){var e=["time"];f.state===m.Default&&e.push("is-initial"),f.state===m.Paused&&e.push("is-paused"),c(e)}),[f.state]),i.a.createElement("div",{className:"shrine current"},i.a.createElement("div",{className:"counter"},_>-1?_+1:""),i.a.createElement("div",{className:"name"},(null===g||void 0===g?void 0:g.name)?g.name:"Ready to go"),i.a.createElement("div",{className:"desc"},(null===g||void 0===g?void 0:g.desc)?g.desc:"Start the timer to reveal the first shrine!"),i.a.createElement("div",{className:r.join(" ")},i.a.createElement(M,{timestamp:t,runstate:f.state,onUpdatePausedTime:e.onUpdatePausedTime})))},N=function(e){var a=Object(n.useState)(""),o=Object(u.a)(a,2),t=o[0],s=o[1],l=Object(n.useState)(!1),d=Object(u.a)(l,2),r=d[0],c=d[1];return Object(n.useEffect)((function(){var a,o,n=null===(a=e.shrine)||void 0===a?void 0:a.location.x,i=null===(o=e.shrine)||void 0===o?void 0:o.location.z,l="z".concat(6,",").concat(n,",").concat(i);l!==t&&s(l)}),[e.shrine,t]),Object(n.useEffect)((function(){c(!!e.shrine)}),[e.shrine]),i.a.createElement("div",{className:"worldmap"},i.a.createElement("div",{className:"mapwrapper"},r&&i.a.createElement(K,{location:t})))},K=function(e){return i.a.createElement("iframe",{title:"BOTW map",key:e.location,className:"mapframe",src:"https://objmap.zeldamods.org/#/map/".concat(e.location)})};!function(e){e[e.Default=0]="Default",e[e.Running=1]="Running",e[e.Paused=2]="Paused",e[e.Ended=3]="Ended"}(m||(m={}));var w=function(e){var a=Object(n.useState)(e.run),o=Object(u.a)(a,2),t=o[0],s=o[1],l=Object(n.useState)(-1),d=Object(u.a)(l,2),r=d[0],c=d[1],g=Object(n.useState)(!1),h=Object(u.a)(g,2),x=h[0],b=h[1],z=Object(n.useState)(!1),v=Object(u.a)(z,2),k=v[0],T=v[1],E=function(e){s((function(a){return Object(f.a)({},a,{splits:e})}))},j=function(e){s((function(a){return Object(f.a)({},a,{shrine_ids:e})}))},M=function(e){s((function(a){return Object(f.a)({},a,{state:e})})),e===m.Running&&(-1===t.rundate&&s((function(e){return Object(f.a)({},e,{rundate:Date.now()})})),-1===r&&c(0))},K=function(){if(t.state===m.Running){r>=t.shrine_ids.length-1&&(t.state=m.Ended);var e=t.splits;e.set(r,Date.now()-t.rundate-t.paused_time),E(e),78==t.shrine_ids[r]&&(T(!0),s((function(e){return Object(f.a)({},e,{is_blood_moon:!1})}))),c((function(e){return e+1}))}else M(m.Running)},w=function(){var e=t.shrine_ids;t.splits;k||(78===e[Math.max(0,r)]?(s((function(e){return Object(f.a)({},e,{is_blood_moon:!1})})),e.splice(r,1),j(e)):(s((function(e){return Object(f.a)({},e,{is_blood_moon:!0})})),e.splice(Math.max(0,r),0,78),j(e)))},D=function(){var e=t.splits;e.size<1||(e.delete(r-1),c((function(e){return e-1})),E(e))},R=function(){var e=t.splits;e.set(r,-1),E(e),c((function(e){return e+1}))},H=function(){var e=t.splits;e.clear(),E(e),s((function(e){return Object(f.a)({},e,{paused_time:-1,rundate:-1})})),M(m.Default),c(-1)},W=function(){return M(m.Paused)},P=function(){return b(!x)},F=function(e){var a=function(e){var a,o=p[e];return null===(a=_[o])||void 0===a?void 0:a.callback}(e.code);a&&a()};i.a.useEffect((function(){var e;e={add_split:K,undo_split:D,skip_split:R,reset_splits:H,pause:W,show_help:P,toggle_blood_moon:w},Object.entries(e).map((function(e){var a=Object(u.a)(e,2),o=a[0],n=a[1];_[o].callback=n}))})),i.a.useEffect((function(){return document.addEventListener("keydown",F,!1),function(){document.removeEventListener("keydown",F,!1)}}));return i.a.createElement("div",{className:function(){var e=["bg"];return t.is_blood_moon&&e.push("is-blood-moon"),e.join(" ")}()},i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"header"},"Botw All Shrines Randomizer"),i.a.createElement("div",{className:"seedinfo"},"Seed: ",t.seed),i.a.createElement(A,{run:t}),i.a.createElement(O,{run:t,currentShrine:r,onUpdatePausedTime:function(e){s((function(a){return Object(f.a)({},a,{paused_time:e})}))}}),i.a.createElement(N,{shrine:S.find((function(e){return e.index===t.shrine_ids[r]}))}),i.a.createElement("div",{className:"help ".concat(x?"is-visible":"")},!x&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"helphint"},i.a.createElement("span",{className:"key"},"Space")," to start / split \xa0",i.a.createElement("span",{className:"key"},"H")," to show / hide help")),x&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"instructions"},i.a.createElement(B,{run:t})),i.a.createElement("div",{className:"hotkeys"},i.a.createElement(y,null))))))},B=function(e){var a=e.run;return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"All shrines except the Blood Moon shrine has been shuffled using the seed ",a.seed,"."),i.a.createElement("p",null,"Hit ",i.a.createElement("span",{className:"key"},"B")," to insert a Blood Moon shrine split."))};o(28);var D=function(){var e={state:m.Default,runner:"Test Runner",rundate:-1,paused_time:-1,is_blood_moon:!1,seed:"1A39SPECSNLUL71F",shrine_ids:c("1A39SPECSNLUL71F"),splits:new Map([]),pb_splits:new Map([[0,13999],[1,117123],[2,261102],[3,358e3],[4,458e3],[5,558e3],[6,658e3]]),wr_splits:new Map([[0,16e3],[1,115e3],[2,27e4],[3,361e3],[4,458e3],[5,558e3],[6,658e3]])};return i.a.createElement(i.a.Fragment,null,i.a.createElement(w,{run:e}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.64b2e880.chunk.js.map