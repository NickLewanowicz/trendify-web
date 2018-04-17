import Component from '@ember/component';
import { computed } from '@ember/object'
export default Component.extend({
  socketIOService: Ember.inject.service('socket-io'),
  tagName: '',
  gameState: 'lobby',
  myVote: '',
  name: null,
  rounds: {
    round_number: 1,
    total_rounds: 5,
    ends_at: 0
  },
  enrolled: true,
  challenge: '',
  users: [{}],
  currentModel: computed('gameState', 'rounds.@each', 'name', 'trendData', 'users.[]', function() {
    let x = {
      gameState: this.get('gameState'),
      rounds: this.get('rounds'),
      name: this.get('name'),
      trendData: this.get('trendData'),
      users: this.get('users'),
      challenge: this.get('challenge'),
      room: this.get('sessionId'),

    }
    console.log(x)
    return x
  }),

  trendData: {},

  didInsertElement() {
    this._super(...arguments);

    this.socket = this.get('socketIOService').socketFor('http://localhost:8080/');
    this.socket.on('connect', this.onConnect, this);
    this.socket.on('update', event => {
      this.send(`update_${event.type}`, event)
    });

    this.socket.on('should-enroll', _ => {
      this.set('showEnrollModal', true);
    })
    /*
        4. It is also possible to set event handlers on specific events
    */
    //socket.on('myCustomEvent', () => { socket.emit('anotherCustomEvent', 'some data'); });
  },

  onConnect() {
    this.socket.emit('handshake', this.get('accessPass'));
  },

  myCustomEvent(data) {
    this.socket.emit('anotherCustomEvent', 'some data');
  },

  willDestroyElement() {
    this._super(...arguments);
    this.socket.emit('exit', this.get('accessPass'));
    //socket.off('message', this.onMessage);
    //socket.off('myCustomEvent', this.myCustomEvent);
  },

  actions: {
    update_trend_data(event) {
      this.set('trendData', event)
    },
    update_challenge(event) {
      this.set('challenge', event.word)
    },
    update_state(event) {
      this.set('gameState', event.state)
      this.set('ends_at', event.state)
    },
    update_round_number(event) {
      this.set('rounds', event)
      console.log(this.get('rounds'))
    },
    update_users(event) {
      console.log(event.users)
      this.set('users', event.users)
    },

    update_user(event) {
      this.set('name', event.name)
    },

    enroll_user(event) {
      //if(event.user_id == localStorage[''])
    },
    user_vote(word) {

    },
    game_start() {
      console.log('nshoeu')
      this.socket.emit('game_start', this.get('accessPass'));
    },
    submit_entry(vote) {
      this.socket.emit('vote', this.get('accessPass'), vote);
    },
    set_name(name) {
      this.socket.emit('enroll', this.get('accessPass'), name);
      this.set('showEnrollModal', false);
    }
  }
});
