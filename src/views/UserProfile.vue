<template>
  <v-container
    id="user-profile-view"
    fluid
    tag="section"
  >
    <v-col
      cols="12"
      md="8"
    >
      <material-card>
        <template #title>
          取得予定の資格一覧
          <div id="app">
            <li
              v-for="item in $store.state.license"
              :key="item"
            >
              {{ item.name }}
            </li>
          </div>
        </template>
      </material-card>
    </v-col>

    <app-card class="mt-4 text-center">
      <template>
        <div>
          <v-sheet
            tile
            height="6vh"
            color="grey lighten-3"
            class="d-flex align-center"
          >
            <v-btn
              icon
              @click="$refs.calendar.prev()"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              icon
              @click="$refs.calendar.next()"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-sheet>
          <v-sheet height="94vh">
            <v-calendar
              ref="calendar"
              v-model="value"
              :events="events"
              :event-color="getEventColor"
              @change="getEvents"
            />
          </v-sheet>
        </div>
      </template>
    </app-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      events: [],
      value: '',
    }),
    methods: {
      getEvents () {
        const events = [
          {
            name: '会議',
            start: new Date(this.$store.state.events[0].start), // 開始時刻
            end: new Date(this.$store.state.events[0].end), // 終了時刻
            color: 'blue',
            timed: false, // 終日ならfalse
          },
        ]
        this.events = events
      },
      getEventColor (event) {
        return event.color
      },
    },
  }
</script>
