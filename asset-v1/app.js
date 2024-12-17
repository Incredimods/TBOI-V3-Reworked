/* CONSOMÉ DE GUAYABA */
var app=new function(){this.name="TBOI",this.version="3 Remastered",this.date="2024",this.folder="asset-v1/",this.looptime=12000,this.bpm=80,this.totalframe=256,this.nbpolo=7,this.nbloopbonus=6,this.bonusloopA=!1,this.bonusendloopA=!1,this.recmaxloop=34,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepolotshirt="polo-sprite-tshirt.png",this.spritepicto="game-picto.png",this.colBck="#000000",this.col0="#C8CCD3",this.col1="#000000",this.col2="#000000",this.col3="#2E2933",this.col4="#2E2933",this.animearray=[
{name:"1_iphyx",color:"000000",uniqsnd:!0},
{
        name: "2_holes",
        color: "000000",
        uniqsnd: !0
    },{name:"3_switch",color:"000000",uniqsnd:!0},{
        name: "4_hash",
        color: "000000",
        uniqsnd: !0
    },
{
        name: "5_bucket",
        color: "00000",
        uniqsnd: !0
    },
{name:"6_slend",color:"000000",uniqsnd:!0},
{name:"7_detective",color:"000000",uniqsnd:!0},
{
        name: "8_t",
        color: "000000",
        uniqsnd: !0
    },{
        name: "9_buttons",
        color: "000000",
        uniqsnd: !0
    },{
        name: "10_fungi",
        color: "000000",
        uniqsnd: !0
    },{name:"11_hope",color:"000000",uniqsnd:!0},{
        name: "12_lamp",
        color: "000000",
        uniqsnd: !0
    },{
        name: "13_doublecross",
        color: "000000",
        uniqsnd: !0
    },{
        name: "14_sub",
        color: "000000",
        uniqsnd: !0
    },{
        name: "15_candle",
        color: "000000",
        uniqsnd: !0
    },{
        name: "16_empty",
        color: "000000",
        uniqsnd: !0
    },{
        name: "17_ablixa",
        color: "000000",
        uniqsnd: !0
    },{
        name: "18_silence",
        color: "000000",
        uniqsnd: !0
    },{
        name: "19_innit",
        color: "000000",
        uniqsnd: !0
    },{
        name: "20_ward",
        color: "000000",
        uniqsnd: !0
    },{
        name: "21_amen",
        color: "000000",
        uniqsnd: !0
    },{
        name: "22_bell",
        color: "000000",
        uniqsnd: !0
    }
],this.bonusarray=[];
for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};