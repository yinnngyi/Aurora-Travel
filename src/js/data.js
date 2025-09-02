window.data = {
  day1: {
    info: {
      date: '2025/12/06 (六)',
      day: 'Day 1',
      title: '抵達溫哥華',
      note: [`總飛行時間 15h 20m<br>溫哥華與台北時差 -16hr`]
    },
    schedule: [
      {
        time: '18:00<br>~<br>18:30',
        title: '桃園國際機場：第一航廈',
        subtitle: '逾時不候'
      },
      {
        time: '21:15',
        title: '✈️ 台灣 TPE → 香港 HKG',
        subtitle: 'Cathay Pacific CX479',
        transportation: [
          {
            method: 'plane',
            duration: '2h 10m'
          }
        ]
      },
      {
        time: '23:25',
        title: '香港轉機',
        subtitle: ''
      },
      {
        time: '12/7<br>01:00',
        title: '✈️ 香港 HKG → 溫哥華 YVR',
        subtitle: 'Cathay Pacific CX888',
        transportation: [
          {
            method: 'plane',
            duration: '11h 35m'
          }
        ]
      },
      {
        time: '12/6<br>20:35',
        title: '抵達溫哥華機場',
        subtitle: '',
        transportation: [
          {
            method: 'walk',
            duration: ''
          }
        ]
      },
      {
        time: '22:00',
        title: '💤 住宿',
        subtitle: '溫哥華機場航站樓費爾蒙酒店',
        // image: 'images/day1.png',
        expanded: {
          map: {
            text: 'Fairmont Vancouver Airport',
            link: 'https://maps.app.goo.gl/kxiHfeGy22fNcNrg8'
          }
        }
      }
    ]
  },
  day2: {
    info: {
      date: '2025/12/07 (日)',
      day: 'Day 2',
      title: '黃刀鎮三天三夜 - 1',
      note: [`黃刀鎮與台北時差 -15hr<br>日出時間：08-10，日落時間：15-17`]
    },
    schedule: [
      {
        time: 'Free<br>~<br>12:00',
        title: '🥪 早午餐自理 & 準備搭機',
        subtitle: '可以吃機場',
        expanded: {
          note: [
            `機場有：Subway、A&W、Lee's Donuts、Japadog、Purebread、Pajo's Fish & Chips...`
          ]
        }
      },
      {
        time: '13:15',
        title: '✈️ 溫哥華 YVR → 黃刀鎮 YZF',
        subtitle: 'Air Canada AC8478（沒有吃的）',
        transportation: [
          {
            method: 'plane',
            duration: '2h 29m'
          }
        ]
      },
      {
        time: '16:44',
        title: '抵達黃刀鎮機場',
        subtitle: '旅行社接機',
        transportation: [
          {
            method: 'bus',
            duration: ''
          }
        ]
      },
      {
        time: '',
        title: '飯店週邊購物資訊',
        subtitle: '飯店步行 5-8 分鐘',
        expanded: {
          note: [
            `<ul>
              <li>超市 <a class="map-link" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/HPwZMwNp3Jt6wsXe9">YK Centre Mall</a><br>18:00 關門，可以買泡麵零食</li>
              <li>超市 <a class="map-link" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/zXw4AodeeBPbfTXu6">Inder's Your Independent Grocer Yellowknife</a><br>21:00 關門，各種雜貨</li>
              <li>藥局 <a class="map-link" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/bpYM9NmmEb8mEVvb7">Shoppers Drug Mart</a><br>21:00 關門，日用品、美妝、零食</li>
              <li>📷 打卡地標：溫度計 <a class="map-link" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/HfMBZsbUDAbnoxGn9">YK Center Clock</a></li>
            </ul>`
          ]
        },
        transportation: [
          {
            method: 'walk',
            duration: ''
          }
        ]
      },
      {
        time: '???',
        title: '🍜 晚餐：自費',
        subtitle: '依導遊安排時間為主，飯店步行 5-8 分鐘',
        expanded: {
          note: [
            `<ul>
              <li>極地口味中餐廳红蘋果 <a class="map-link" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/RNcL4UVAGgfTxB6J6">The Red Apple Restaurant</a></li>
              <li>越南餐廳 <a class="map-link" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/uiPvkvpGUxHMHk5k6">A Taste Of Saigon</a><br>辣味河粉、炸餛飩、春捲、沙爹涼拌米線</li>
            </ul>`
          ]
        },
        transportation: [
          {
            method: 'bus',
            duration: ''
          }
        ]
      },
      {
        time: '???',
        title: '追極光',
        subtitle: '丹尼帳篷營地追光+巴士追光（一晚兩種體驗）',
        expanded: {
          note: [
            `<ul>
              <li>租借禦寒衣物（外套、褲子、鞋子、手套）</li>
              <li>當地印第安人狩獵文化和帳蓬體驗</li>
              <li>黃刀野外各個湖邊觀賞不同角度的極光</li>
            </ul>
            <p>極光級數：1-10級。一般看到都為3級，但由肉眼看見只能看到白雲般的弧線，在相機拍攝下才會出現綠色極光；而4級肉眼可見綠色極光，如果到了7級，肉眼可見白粉色極光</p>`
          ]
        },
        transportation: [
          {
            method: 'bus',
            duration: ''
          }
        ]
      },
      {
        time: '???',
        title: '💤 回飯店',
        subtitle: '諾瓦城堡',
        expanded: {
          note: [`房間有微波爐、烤麵包機`],
          map: {
            text: 'Chateau Nova Yellowknife',
            link: 'https://maps.app.goo.gl/Ve5f5GhB8xMWMpvD8'
          }
        }
      }
    ]
  },
  day3: {
    info: {
      date: '2025/12/08 (一)',
      day: 'Day 3',
      title: '黃刀鎮三天三夜 - 2',
      note: [`行程依導遊安排為主`]
    },
    schedule: [
      {
        time: '???',
        title: '搭車市區遊導覽小鎮',
        subtitle: 'City Tour 約1.5hr',
        expanded: {
          note: [
            `<p style="color :red;">行程不含司機服務小費，4天3晚CAD$35/每人</p>
            <ul>
              <li>Yellowknife Visitor Centre 遊客中心
                <br>明信片蓋印章
                <br>取北緯60度證書、小禮物（明信片+黃刀小別針）
              </li>
              <li>Welcome yellowknife sign 歡迎碑打卡</li>
              <li>Bristol Monument 第一架降落北極圈的飛機</li>
              <li>Bush Pilots Monument 飛行員紀念碑
                <br>黃刀鎮最高點，可鳥瞰黃刀市區及大奴湖區，是為紀念飛越廣闊西北地區犧牲的飛行員而建。
              </li>
              <li>Old Town 老城區印地安保留地</li>
              <li>加拿大鵝店（超商）<a class="map-link" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/hG6G8cRiVLWDcC9XA">Weaver&Devore Trading</a>
                <br>購買​​紀念品：明信片、北極熊玩偶、楓糖漿、紀念別針、北極熊紀念車牌、冰酒...
              </li>
            </ul>`
          ]
        }
      },
      {
        time: '???',
        title: '🐟 午餐：自費',
        subtitle: '依導遊安排為主，可能會是網紅魚餐廳',
        expanded: {
          map: {
            text: `Bullock's Bistro`,
            link: 'https://maps.app.goo.gl/1ZTwu63DsDW4dDASA'
          },
          note: [`煎的 （Arctic Char）、炸的（White fish）、烤的 （Pickerel）`]
        }
      },
      {
        time: '???',
        title: '⛄️ 狗狗雪橇 15min',
        subtitle: '依導遊安排為主'
      },
      {
        time: '???',
        title: '⛄️ 雪上摩托 1hr',
        subtitle: '依導遊安排為主',
        expanded: {
          note: [
            `其中會有1.2台 ATV 越野車，當天猜拳輸的騎，猜贏的就是雪地摩托車`
          ]
        }
      },
      {
        time: '???',
        title: '🍜 晚餐：？？？',
        subtitle: '導遊建議（自費）or自理'
      },
      {
        time: '???',
        title: '追極光',
        subtitle: '丹尼帳篷營地追光+巴士追光（一晚兩種體驗）',
        expanded: {
          note: [
            `<ul>
              <li>租借禦寒衣物（外套、褲子、鞋子、手套）</li>
              <li>當地印第安人狩獵文化和帳蓬體驗</li>
              <li>黃刀野外各個湖邊觀賞不同角度的極光</li>
            </ul>
            <p>極光級數：1-10級。一般看到都為3級，但由肉眼看見只能看到白雲般的弧線，在相機拍攝下才會出現綠色極光；而4級肉眼可見綠色極光，如果到了7級，肉眼可見白粉色極光</p>`
          ]
        }
      },
      {
        time: '???',
        title: '💤 回飯店',
        subtitle: '諾瓦城堡',
        expanded: {
          note: [`房間有微波爐、烤麵包機`],
          map: {
            text: 'Chateau Nova Yellowknife',
            link: 'https://maps.app.goo.gl/Ve5f5GhB8xMWMpvD8'
          }
        }
      }
    ]
  },
  day4: {
    info: {
      date: '2025/12/09 (二)',
      day: 'Day 4',
      title: '黃刀鎮三天三夜 - Final',
      note: [`行程依導遊安排為主，其餘時間自由活動`]
    },
    schedule: [
      {
        time: '???',
        title: '自由活動',
        subtitle: '市區亂逛',
        expanded: {
          note: [
            `<ul>
              <li>咖啡貝果 <a class="map-link" href="https://maps.app.goo.gl/HcQgBfoew58y3jPV7" target="_blank" rel="noopener noreferrer">Birchwood</a></li>
              <li>甜甜圈 <a class="map-link" href="https://maps.app.goo.gl/Zdx3itYKYwbW6hpg8" target="_blank" rel="noopener noreferrer">Tim Hortons</a></li>
              <li>咖啡廳 <a class="map-link" href="https://maps.app.goo.gl/B3r8yp6qCrCw73Ph6" target="_blank" rel="noopener noreferrer">Te Adoro Cafe & Bar</a></li>
              <li>釀酒廠餐廳 <a class="map-link" href="https://maps.app.goo.gl/kdNFrJTus2zoefWCA" target="_blank" rel="noopener noreferrer">NWT Brewing Company / The Woodyard Brewhouse & Eatery</a><br>16:00–22:00，距離飯店 1.7km</li>
            </ul>`
          ]
        },
        transportation: [
          {
            method: 'walk',
            duration: ''
          }
        ]
      },
      {
        time: '???',
        title: '威爾斯親王北方文化遺產中心博物館',
        subtitle: '$free，在飯店附近',
        expanded: {
          map: {
            text: 'Prince of Wales Northern Heritage Centre',
            link: 'https://maps.app.goo.gl/Ve5f5GhB8xMWMpvD8'
          }
        },
        transportation: [
          {
            method: 'walk',
            duration: ''
          }
        ]
      },
      {
        time: '???',
        title: '🍔 午餐：？？？',
        subtitle: '導遊建議（自費）or自理'
      },
      {
        time: '???',
        title: '🍜 晚餐：？？？',
        subtitle: '導遊建議（自費）or自理'
      },
      {
        time: '???',
        title: '🏠 回飯店',
        subtitle: '收拾行李、建議睡一下',
        transportation: [
          {
            method: 'bus',
            duration: ''
          }
        ]
      },
      {
        time: '???',
        title: '追極光',
        subtitle: '丹尼帳篷營地追光+巴士追光（一晚兩種體驗）',
        expanded: {
          note: [
            `<ul>
              <li>租借禦寒衣物（外套、褲子、鞋子、手套）</li>
              <li>當地印第安人狩獵文化和帳蓬體驗</li>
              <li>黃刀野外各個湖邊觀賞不同角度的極光</li>
            </ul>
            <p>極光級數：1-10級。一般看到都為3級，但由肉眼看見只能看到白雲般的弧線，在相機拍攝下才會出現綠色極光；而4級肉眼可見綠色極光，如果到了7級，肉眼可見白粉色極光</p>`
          ]
        },
        transportation: [
          {
            method: 'bus',
            duration: ''
          }
        ]
      },
      {
        time: '12/10<br>04:00',
        title: '準備搭機',
        subtitle: '極光結束直達機場'
      }
    ]
  },
  day5: {
    info: {
      date: '2025/12/10 (三)',
      day: 'Day 5',
      title: '回到溫哥華',
      note: [`溫哥華與台北時差 -16hr`]
    },
    schedule: [
      {
        time: '05:25',
        title: '✈️ 黃刀鎮 YZF → 溫哥華 YVR',
        subtitle: 'Air Canada AC8477（沒有吃的）',
        transportation: [
          {
            method: 'plane',
            duration: '2h 52m'
          }
        ]
      },
      {
        time: '07:17',
        title: '抵達溫哥華',
        subtitle: '',
        transportation: [
          {
            method: '',
            duration: '40min'
          },
          {
            method: 'train',
            duration: `Sky train：[Canada Line]<br>Yvr–Airport → Vancouver City Centre`
          },
          {
            method: 'walk',
            duration: '1km'
          }
        ]
      },
      {
        time: '09:00<br>~<br>10:00',
        title: '🏠 飯店放行李',
        subtitle: '藍色地平線飯店',
        expanded: {
          map: {
            text: 'Blue Horizon Hotel',
            link: 'https://maps.app.goo.gl/9Wa4T6siZ7AKsX2W8'
          }
        },
        transportation: [
          {
            method: '',
            duration: '20min'
          },
          {
            method: 'walk',
            duration: '1km'
          },
          {
            method: 'train',
            duration: `Sky train：[Canada Line]<br>Vancouver City Centre → Yaletown-Roundhouse Station`
          },
          {
            method: 'walk',
            duration: '290m'
          }
        ]
      },
      {
        time: '10:00<br>~<br>12:00',
        title: '🥪 早午餐：OEB Breakfast Co.',
        subtitle: 'Hook吃過，排隊名店',
        expanded: {
          map: {
            text: 'OEB Breakfast Co.',
            link: 'https://maps.app.goo.gl/TbsacJjwJkNJcLma7'
          }
        },
        transportation: [
          {
            method: '',
            duration: '18min'
          },
          {
            method: 'walk',
            duration: '290m'
          },
          {
            method: 'train',
            duration: `Sky train：[Canada Line]<br>Yaletown-Roundhouse Station → Waterfront Station`
          },
          {
            method: 'walk',
            duration: '650m'
          }
        ]
      },
      {
        time: '13:00<br>~<br>14:00',
        title: 'Canada Place',
        subtitle: '港口逛逛、拍照',
        expanded: {
          map: {
            text: 'Canada Place',
            link: 'https://maps.app.goo.gl/XRKvcfQDB9z4tJF2A'
          }
        },
        transportation: [
          {
            method: '',
            duration: '25min'
          },
          {
            method: 'bus',
            duration: '免費接駁車 13:30、14:00、14:30'
          }
        ]
      },
      // {
      //   time: '13:00<br>~<br>1430',
      //   title: '🍔 太平洋中心 B1 美食街',
      //   subtitle: '吃點東西',
      //   expanded: {
      //     map: {
      //       text: 'CF Pacific Centre',
      //       link: 'https://maps.app.goo.gl/qsU4CahrmwtN4HA39'
      //     }
      //   },
      //   transportation: [
      //     {
      //       method: 'bus',
      //       duration: '接駁車'
      //     }
      //   ]
      // },
      {
        time: '14:30<br>~<br>16:30',
        title: '卡皮拉諾吊橋公園',
        subtitle: '帶點食物上去',
        expanded: {
          map: {
            text: 'Capilano Suspension Bridge Park',
            link: 'https://maps.app.goo.gl/o8yZRjfswYrDNZwD7'
          },
          note: [
            `
            門票：TWD $1811
            <br><a href="https://rosaroundtheworld.com/capilano/" target="_blank" rel="noopener noreferrer">🔗部落格介紹</a>
          `
          ]
        },
        transportation: [
          {
            method: '',
            duration: '25min'
          },
          {
            method: 'bus',
            duration: '免費接駁車 16:30、16:45、17:00、17:30、17:45'
          }
        ]
      },
      {
        time: '???',
        title: '🏠 飯店 check in',
        subtitle: '藍色地平線飯店',
        expanded: {
          map: {
            text: 'Blue Horizon Hotel',
            link: 'https://maps.app.goo.gl/9Wa4T6siZ7AKsX2W8'
          }
        }
      },
      {
        time: '???',
        title: '🍔 晚餐自理',
        subtitle: '自由時間，可以在飯店睡覺',
        transportation: [
          {
            method: 'walk',
            duration: '1.1km'
          }
        ]
      },
      {
        time: '19:00<br>~<br>20:00',
        title: '聖誕市集 🎄',
        subtitle: ' 逛逛，感受聖誕氣氛',
        transportation: [
          {
            method: 'walk',
            duration: '1.1km'
          }
        ],
        expanded: {
          map: {
            text: 'Vancouver Christmas Market',
            link: 'https://maps.app.goo.gl/i3VaRpPLHV5Y6wAb9'
          },
          note: [
            `門票：CAD $24 = TWD $528（不含市集內花費）<br>
            Opening Hours ~ 21:30<br>
            <a href="https://lillian.tw/vancouverchristmasmarket/" target="_blank" rel="noopener noreferrer">🔗部落格介紹</a>`
          ]
        }
      },
      {
        time: '???',
        title: '💤 回飯店',
        subtitle: '藍色地平線飯店',
        expanded: {
          map: {
            text: 'Blue Horizon Hotel',
            link: 'https://maps.app.goo.gl/9Wa4T6siZ7AKsX2W8'
          }
        }
      }
    ]
  },
  day6: {
    info: {
      date: '2025/12/11 (四)',
      day: 'Day 6',
      title: '溫哥華',
      note: [``]
    },
    schedule: [
      {
        time: '09:00<br>~<br>10:00',
        title: '🍔 A&W Canada 24H',
        subtitle: '就在飯店附近',
        expanded: {
          map: {
            text: 'A&W Canada',
            link: 'https://maps.app.goo.gl/9id2ZmHJhSKzuyvN7'
          }
        },
        transportation: [
          {
            method: '',
            duration: '25min'
          },
          {
            method: 'walk',
            duration: '450m'
          },
          {
            method: 'bus',
            duration:
              '[019] WB W Pender St @ Bute St → Stanley Park Loop @ Bay 1'
          },
          {
            method: 'walk',
            duration: '650m'
          }
        ]
      },
      {
        time: '10:30<br>~<br>13:30',
        title: '史丹利公園＋溫哥華水族館',
        subtitle: '戶外海洋動物區有海獺、4D電影、亞馬遜森林、深淵怪獸',
        expanded: {
          map: {
            text: 'A&W Canada',
            link: 'https://maps.app.goo.gl/9id2ZmHJhSKzuyvN7'
          }
        },
        transportation: [
          {
            method: '',
            duration: '50min'
          },
          {
            method: 'walk',
            duration: '450m'
          },
          {
            method: 'bus',
            duration:
              '[019] WB W Pender St @ Bute St → Stanley Park Loop @ Bay 1'
          },
          {
            method: 'walk',
            duration: '650m'
          }
        ]
      },
      {
        time: '14:30<br>~<br>18:00',
        title: '固蘭湖島',
        subtitle: '吃吃喝喝、藝術市集、彩虹船、晚上聖誕燈飾',
        expanded: {
          map: {
            text: 'Granville Island Public Market',
            link: 'https://maps.app.goo.gl/KoPuaXywVEhq2Sda8'
          },
          note: [
            `<ul>
              <li>市場 09-18 </li>
              <li>酥皮蛤蜊濃湯 A La Mode</li>
              <li>濃湯 Stock Market</li>
              <li>新鮮現烤正宗加東蒙特婁式貝果 Siegel’s Bagels<br>👍 推薦：Morning Bagel、Montreal Smoked Meat Bagel</li>
              <li>JJ Bean Coffee Roasters</li>
              <li>Lee’s Donut</li>
              <li>溫哥華最好吃的可麗露可試吃 La Bise Bakery</li>
            </ul>
            <a href="https://www.instagram.com/p/DJx5GR_R2j5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">🔗美食介紹</a>
            <br><br><p style="font-weight: bolder;">不在公眾市場內：</p>
            <ul>
              <li>新鮮龍蝦堡 The Lobster Man<br>👍推薦：Signature Lobster Roll</li>
              <li>Net Loft設計小商場10-18</li>
            </ul>
            `
          ]
        },
        transportation: [
          {
            method: '',
            duration: '25min'
          },
          {
            method: 'walk',
            duration: '350m'
          },
          {
            method: 'bus',
            duration:
              '[050] WB W Pender St @ Bute St → NB Granville St @ Smithe St'
          },
          {
            method: 'walk',
            duration: '270m'
          }
        ]
      },
      {
        time: '???',
        title: '洛遜廣場',
        subtitle: '散步、拍照',
        transportation: [
          {
            method: 'walk',
            duration: '700m'
          }
        ],
        expanded: {
          map: {
            text: 'Robson Square',
            link: 'https://maps.app.goo.gl/zeXGtk76QtZXJrpd8'
          }
        }
      },
      {
        time: '???',
        title: '💤 回飯店',
        subtitle: '藍色地平線飯店',
        expanded: {
          map: {
            text: 'Blue Horizon Hotel',
            link: 'https://maps.app.goo.gl/9Wa4T6siZ7AKsX2W8'
          }
        }
      }
    ]
  },
  day7: {
    info: {
      date: '2025/12/12 (五)',
      day: 'Day 7',
      title: '溫哥華 - Final',
      note: [``]
    },
    schedule: [
      {
        time: '09:00',
        title: 'check out',
        subtitle: '寄放行李在飯店',
        transportation: [
          {
            method: 'bus',
            duration: '9:55 在 Hyatt Hotel 搭接駁車'
          }
        ]
      },
      {
        time: '11:00<br>~<br>16:50',
        title: '海天纜車',
        subtitle: '會在山上用餐、或帶吃的上去',
        transportation: [
          {
            method: 'bus',
            duration: '16:50 搭接駁車'
          }
        ],
        expanded: {
          map: {
            text: 'Sea to Sky Gondola',
            link: 'https://maps.app.goo.gl/DunsXHkQQp65QttE8'
          },
          note: [`門票：CAD $111 = TWD $2442（含接駁車）`]
        }
      },
      {
        time: '18:00<br>~<br>20:00',
        title: '🍔 回市區晚餐、拿行李',
        subtitle: '',
        transportation: [
          {
            method: '',
            duration: `約 30min`
          },
          {
            method: 'train',
            duration: `Sky train：[Canada Line]<br>??? → Yvr–Airport`
          }
        ]
      },
      {
        time: '20:00<br>~<br>21:00',
        title: '前往機場準備搭機',
        subtitle: 'CX865 00:05'
      }
    ]
  },
  day8: {
    info: {
      date: '2025/12/13 (六)',
      day: 'Day 8',
      title: '被偷走的那時差',
      note: [``]
    },
    schedule: [
      {
        time: '00:05<br>~<br>12/14<br>06:35',
        title: '✈️ 溫哥華 YVR → 香港 HKG',
        subtitle: 'Cathay Pacific CX865',
        transportation: [
          {
            method: 'plane',
            duration: '14h 30m'
          }
        ]
      }
    ]
  },
  day9: {
    info: {
      date: '2025/12/14 (日)',
      day: 'Day 9',
      title: '回台灣',
      note: [``]
    },
    schedule: [
      {
        time: '06:35',
        title: '香港轉機',
        subtitle: ''
      },
      {
        time: '08:00',
        title: '✈️ 香港 HKG → 台灣 TPE',
        subtitle: 'Cathay Pacific CX488',
        transportation: [
          {
            method: 'plane',
            duration: '1h 45m'
          }
        ]
      },
      {
        time: '09:45',
        title: '抵達台灣、回可愛的家',
        subtitle: ''
      }
    ]
  }
};