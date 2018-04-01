import Component from '@ember/component';

export default Component.extend({
    socketIOService: Ember.inject.service('socket-io'),
    gameState: 0,
    roundEnd: 1000000000,
    myVote: '',
    name: 'host',
    enrolled: true,
    users: [
        {
            name: "Mat",
            score: 69
        },
        {
            name: "Seena",
            score: 420
        },
        {
            name: "Nick",
            score: 9001
        }
    ],
    trendData: {
        "default": {
          "timelineData": [
            {
              "time": "1519862400",
              "formattedTime": "Mar 1, 2018",
              "formattedAxisTime": "Mar 1",
              "value": [
                100,
                14
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "100",
                "14"
              ]
            },
            {
              "time": "1519948800",
              "formattedTime": "Mar 2, 2018",
              "formattedAxisTime": "Mar 2",
              "value": [
                90,
                15
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "90",
                "15"
              ]
            },
            {
              "time": "1520035200",
              "formattedTime": "Mar 3, 2018",
              "formattedAxisTime": "Mar 3",
              "value": [
                60,
                12
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "60",
                "12"
              ]
            },
            {
              "time": "1520121600",
              "formattedTime": "Mar 4, 2018",
              "formattedAxisTime": "Mar 4",
              "value": [
                58,
                12
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "58",
                "12"
              ]
            },
            {
              "time": "1520208000",
              "formattedTime": "Mar 5, 2018",
              "formattedAxisTime": "Mar 5",
              "value": [
                96,
                16
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "96",
                "16"
              ]
            },
            {
              "time": "1520294400",
              "formattedTime": "Mar 6, 2018",
              "formattedAxisTime": "Mar 6",
              "value": [
                96,
                15
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "96",
                "15"
              ]
            },
            {
              "time": "1520380800",
              "formattedTime": "Mar 7, 2018",
              "formattedAxisTime": "Mar 7",
              "value": [
                95,
                14
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "95",
                "14"
              ]
            },
            {
              "time": "1520467200",
              "formattedTime": "Mar 8, 2018",
              "formattedAxisTime": "Mar 8",
              "value": [
                97,
                14
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "97",
                "14"
              ]
            },
            {
              "time": "1520553600",
              "formattedTime": "Mar 9, 2018",
              "formattedAxisTime": "Mar 9",
              "value": [
                92,
                14
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "92",
                "14"
              ]
            },
            {
              "time": "1520640000",
              "formattedTime": "Mar 10, 2018",
              "formattedAxisTime": "Mar 10",
              "value": [
                55,
                11
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "55",
                "11"
              ]
            },
            {
              "time": "1520726400",
              "formattedTime": "Mar 11, 2018",
              "formattedAxisTime": "Mar 11",
              "value": [
                57,
                13
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "57",
                "13"
              ]
            },
            {
              "time": "1520812800",
              "formattedTime": "Mar 12, 2018",
              "formattedAxisTime": "Mar 12",
              "value": [
                96,
                14
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "96",
                "14"
              ]
            },
            {
              "time": "1520899200",
              "formattedTime": "Mar 13, 2018",
              "formattedAxisTime": "Mar 13",
              "value": [
                93,
                14
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "93",
                "14"
              ]
            },
            {
              "time": "1520985600",
              "formattedTime": "Mar 14, 2018",
              "formattedAxisTime": "Mar 14",
              "value": [
                92,
                13
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "92",
                "13"
              ]
            },
            {
              "time": "1521072000",
              "formattedTime": "Mar 15, 2018",
              "formattedAxisTime": "Mar 15",
              "value": [
                100,
                13
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "100",
                "13"
              ]
            },
            {
              "time": "1521158400",
              "formattedTime": "Mar 16, 2018",
              "formattedAxisTime": "Mar 16",
              "value": [
                88,
                16
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "88",
                "16"
              ]
            },
            {
              "time": "1521244800",
              "formattedTime": "Mar 17, 2018",
              "formattedAxisTime": "Mar 17",
              "value": [
                54,
                13
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "54",
                "13"
              ]
            },
            {
              "time": "1521331200",
              "formattedTime": "Mar 18, 2018",
              "formattedAxisTime": "Mar 18",
              "value": [
                53,
                12
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "53",
                "12"
              ]
            },
            {
              "time": "1521417600",
              "formattedTime": "Mar 19, 2018",
              "formattedAxisTime": "Mar 19",
              "value": [
                95,
                14
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "95",
                "14"
              ]
            },
            {
              "time": "1521504000",
              "formattedTime": "Mar 20, 2018",
              "formattedAxisTime": "Mar 20",
              "value": [
                98,
                16
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "98",
                "16"
              ]
            },
            {
              "time": "1521590400",
              "formattedTime": "Mar 21, 2018",
              "formattedAxisTime": "Mar 21",
              "value": [
                92,
                13
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "92",
                "13"
              ]
            },
            {
              "time": "1521676800",
              "formattedTime": "Mar 22, 2018",
              "formattedAxisTime": "Mar 22",
              "value": [
                95,
                14
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "95",
                "14"
              ]
            },
            {
              "time": "1521763200",
              "formattedTime": "Mar 23, 2018",
              "formattedAxisTime": "Mar 23",
              "value": [
                88,
                14
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "88",
                "14"
              ]
            },
            {
              "time": "1521849600",
              "formattedTime": "Mar 24, 2018",
              "formattedAxisTime": "Mar 24",
              "value": [
                52,
                13
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "52",
                "13"
              ]
            },
            {
              "time": "1521936000",
              "formattedTime": "Mar 25, 2018",
              "formattedAxisTime": "Mar 25",
              "value": [
                53,
                15
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "53",
                "15"
              ]
            },
            {
              "time": "1522022400",
              "formattedTime": "Mar 26, 2018",
              "formattedAxisTime": "Mar 26",
              "value": [
                94,
                13
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "94",
                "13"
              ]
            },
            {
              "time": "1522108800",
              "formattedTime": "Mar 27, 2018",
              "formattedAxisTime": "Mar 27",
              "value": [
                94,
                14
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "94",
                "14"
              ]
            },
            {
              "time": "1522195200",
              "formattedTime": "Mar 28, 2018",
              "formattedAxisTime": "Mar 28",
              "value": [
                93,
                12
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "93",
                "12"
              ]
            },
            {
              "time": "1522281600",
              "formattedTime": "Mar 29, 2018",
              "formattedAxisTime": "Mar 29",
              "value": [
                91,
                15
              ],
              "hasData": [
                true,
                true
              ],
              "formattedValue": [
                "91",
                "15"
              ]
            }
          ],
          "averages": [
            83,
            14
          ]
        }
      },
    hostModel: {
        gameState: 'intermission',
        roundEnd: 1000000000,
        myVote: '',
        name: 'host',
        enrolled: true,
        users: [
            {
                name: "Mat",
                score: 69
            },
            {
                name: "Seena",
                score: 420
            },
            {
                name: "Nick",
                score: 9001
            }
        ],
        trendData: {
            "default": {
              "timelineData": [
                {
                  "time": "1519862400",
                  "formattedTime": "Mar 1, 2018",
                  "formattedAxisTime": "Mar 1",
                  "value": [
                    100,
                    14
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "100",
                    "14"
                  ]
                },
                {
                  "time": "1519948800",
                  "formattedTime": "Mar 2, 2018",
                  "formattedAxisTime": "Mar 2",
                  "value": [
                    90,
                    15
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "90",
                    "15"
                  ]
                },
                {
                  "time": "1520035200",
                  "formattedTime": "Mar 3, 2018",
                  "formattedAxisTime": "Mar 3",
                  "value": [
                    60,
                    12
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "60",
                    "12"
                  ]
                },
                {
                  "time": "1520121600",
                  "formattedTime": "Mar 4, 2018",
                  "formattedAxisTime": "Mar 4",
                  "value": [
                    58,
                    12
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "58",
                    "12"
                  ]
                },
                {
                  "time": "1520208000",
                  "formattedTime": "Mar 5, 2018",
                  "formattedAxisTime": "Mar 5",
                  "value": [
                    96,
                    16
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "96",
                    "16"
                  ]
                },
                {
                  "time": "1520294400",
                  "formattedTime": "Mar 6, 2018",
                  "formattedAxisTime": "Mar 6",
                  "value": [
                    96,
                    15
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "96",
                    "15"
                  ]
                },
                {
                  "time": "1520380800",
                  "formattedTime": "Mar 7, 2018",
                  "formattedAxisTime": "Mar 7",
                  "value": [
                    95,
                    14
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "95",
                    "14"
                  ]
                },
                {
                  "time": "1520467200",
                  "formattedTime": "Mar 8, 2018",
                  "formattedAxisTime": "Mar 8",
                  "value": [
                    97,
                    14
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "97",
                    "14"
                  ]
                },
                {
                  "time": "1520553600",
                  "formattedTime": "Mar 9, 2018",
                  "formattedAxisTime": "Mar 9",
                  "value": [
                    92,
                    14
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "92",
                    "14"
                  ]
                },
                {
                  "time": "1520640000",
                  "formattedTime": "Mar 10, 2018",
                  "formattedAxisTime": "Mar 10",
                  "value": [
                    55,
                    11
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "55",
                    "11"
                  ]
                },
                {
                  "time": "1520726400",
                  "formattedTime": "Mar 11, 2018",
                  "formattedAxisTime": "Mar 11",
                  "value": [
                    57,
                    13
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "57",
                    "13"
                  ]
                },
                {
                  "time": "1520812800",
                  "formattedTime": "Mar 12, 2018",
                  "formattedAxisTime": "Mar 12",
                  "value": [
                    96,
                    14
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "96",
                    "14"
                  ]
                },
                {
                  "time": "1520899200",
                  "formattedTime": "Mar 13, 2018",
                  "formattedAxisTime": "Mar 13",
                  "value": [
                    93,
                    14
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "93",
                    "14"
                  ]
                },
                {
                  "time": "1520985600",
                  "formattedTime": "Mar 14, 2018",
                  "formattedAxisTime": "Mar 14",
                  "value": [
                    92,
                    13
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "92",
                    "13"
                  ]
                },
                {
                  "time": "1521072000",
                  "formattedTime": "Mar 15, 2018",
                  "formattedAxisTime": "Mar 15",
                  "value": [
                    100,
                    13
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "100",
                    "13"
                  ]
                },
                {
                  "time": "1521158400",
                  "formattedTime": "Mar 16, 2018",
                  "formattedAxisTime": "Mar 16",
                  "value": [
                    88,
                    16
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "88",
                    "16"
                  ]
                },
                {
                  "time": "1521244800",
                  "formattedTime": "Mar 17, 2018",
                  "formattedAxisTime": "Mar 17",
                  "value": [
                    54,
                    13
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "54",
                    "13"
                  ]
                },
                {
                  "time": "1521331200",
                  "formattedTime": "Mar 18, 2018",
                  "formattedAxisTime": "Mar 18",
                  "value": [
                    53,
                    12
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "53",
                    "12"
                  ]
                },
                {
                  "time": "1521417600",
                  "formattedTime": "Mar 19, 2018",
                  "formattedAxisTime": "Mar 19",
                  "value": [
                    95,
                    14
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "95",
                    "14"
                  ]
                },
                {
                  "time": "1521504000",
                  "formattedTime": "Mar 20, 2018",
                  "formattedAxisTime": "Mar 20",
                  "value": [
                    98,
                    16
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "98",
                    "16"
                  ]
                },
                {
                  "time": "1521590400",
                  "formattedTime": "Mar 21, 2018",
                  "formattedAxisTime": "Mar 21",
                  "value": [
                    92,
                    13
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "92",
                    "13"
                  ]
                },
                {
                  "time": "1521676800",
                  "formattedTime": "Mar 22, 2018",
                  "formattedAxisTime": "Mar 22",
                  "value": [
                    95,
                    14
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "95",
                    "14"
                  ]
                },
                {
                  "time": "1521763200",
                  "formattedTime": "Mar 23, 2018",
                  "formattedAxisTime": "Mar 23",
                  "value": [
                    88,
                    14
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "88",
                    "14"
                  ]
                },
                {
                  "time": "1521849600",
                  "formattedTime": "Mar 24, 2018",
                  "formattedAxisTime": "Mar 24",
                  "value": [
                    52,
                    13
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "52",
                    "13"
                  ]
                },
                {
                  "time": "1521936000",
                  "formattedTime": "Mar 25, 2018",
                  "formattedAxisTime": "Mar 25",
                  "value": [
                    53,
                    15
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "53",
                    "15"
                  ]
                },
                {
                  "time": "1522022400",
                  "formattedTime": "Mar 26, 2018",
                  "formattedAxisTime": "Mar 26",
                  "value": [
                    94,
                    13
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "94",
                    "13"
                  ]
                },
                {
                  "time": "1522108800",
                  "formattedTime": "Mar 27, 2018",
                  "formattedAxisTime": "Mar 27",
                  "value": [
                    94,
                    14
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "94",
                    "14"
                  ]
                },
                {
                  "time": "1522195200",
                  "formattedTime": "Mar 28, 2018",
                  "formattedAxisTime": "Mar 28",
                  "value": [
                    93,
                    12
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "93",
                    "12"
                  ]
                },
                {
                  "time": "1522281600",
                  "formattedTime": "Mar 29, 2018",
                  "formattedAxisTime": "Mar 29",
                  "value": [
                    91,
                    15
                  ],
                  "hasData": [
                    true,
                    true
                  ],
                  "formattedValue": [
                    "91",
                    "15"
                  ]
                }
              ],
              "averages": [
                83,
                14
              ]
            }
          },
    
    },
    playerModel: {
        gameState: 'lobby',
        roundEnd: 1000000000,
        myVote: '',
        name: 'Stoner69',
        enrolled: false,
        users: [
            {
                name: "Mat",
                score: 69
            },
            {
                name: "Seena",
                score: 420
            },
            {
                name: "Nick",
                score: 9001
            }
        ]
    },
    
    didInsertElement() {
        this._super(...arguments);

        const socket = this.get('socketIOService').socketFor('http://localhost:8080/');
        socket.on('connect', this.onConnect, this);
        socket.on('update', event => {
            this.sendAction(`update_${event.type}`, event)
        });
        /*
            4. It is also possible to set event handlers on specific events
        */
        //socket.on('myCustomEvent', () => { socket.emit('anotherCustomEvent', 'some data'); });
    },
    
    onConnect() {
        const socket = this.get('socketIOService').socketFor('http://localhost:8080/');
        //debugger
        socket.emit('handshake', localStorage['accessPass']);
    },
    
    myCustomEvent(data) {
        const socket = this.get('socketIOService').socketFor('http://localhost:8080/' + this.get('namespace'));
        socket.emit('anotherCustomEvent', 'some data');
    },
    
    willDestroyElement() {
        this._super(...arguments);

        const socket = this.get('socketService').socketFor('http://localhost:8080/' + this.get('namespace'));
        socket.off('connect', this.onConnect);
        //socket.off('message', this.onMessage);
        //socket.off('myCustomEvent', this.myCustomEvent);
    },

    actions: {
        update_state (event) {

        },
        update_round_timer_start (event) {
            
        },
        update_round_timer_end (event) {
            
        },
        update_intermission_timer_start (event) {
            
        },
        update_intermission_timer_end (event) {
            
        },
        update_round_number (event) {
            
        },
        update_users (event) {
            
        },
        enroll_user (name) {
            
        },
        user_vote (word) {
            
        },
        update_state (state) {
            
        },
        game_start () {
            
        },
    }
});