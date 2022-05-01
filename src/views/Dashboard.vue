
<template>
  <v-container>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="license"
      item-key="name"
      show-select
      class="elevation-1"
    />
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template
        v-slot:activator="{ on, attrs }"
      >
        <v-row justify="end" />
        <v-btn
          color="green lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          登録
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          取得する資格を確認します
        </v-card-title>

        <v-card-text>
          <li
            v-for="item in selected"
            :key="item"
          >
            {{ item.name }}
          </li>
        </v-card-text>

        <v-divider />

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="update()"
          >
            登録
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        singleSelect: false,
        selected: [],
        dialog: false, // ダイアログの表示用
        headers: [
          {
            text: '資格名称',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'キャリア方向性', value: 'career' },
          { text: '難易度(目安)', value: 'difficulty' },
          { text: '合格率(目安)', value: 'pass_rate' },
          { text: '実施機関', value: 'agency' },
        ],
        license: [
          {
            name: '法務2級',
            career: '銀行業務',
            difficulty: 3,
            pass_rate: '30%',
            agency: '銀行業務検定',
          },
          {
            name: '財務2級',
            career: '銀行業務',
            difficulty: 3,
            pass_rate: '30%',
            agency: '銀行業務検定',
          },
          {
            name: '税務2級',
            career: '銀行業務',
            difficulty: 3,
            pass_rate: '20%',
            agency: '銀行業務検定',
          },
          {
            name: '外国為替3級',
            career: '銀行業務',
            difficulty: 3,
            pass_rate: '40%',
            agency: '銀行業務検定',
          },
          {
            name: '金融リスクマネジメント2級',
            career: '銀行業務',
            difficulty: 3,
            pass_rate: '30%',
            agency: '銀行業務検定',
          },
          {
            name: 'コンプライアンス1級',
            career: '経営管理業務',
            difficulty: 3,
            pass_rate: '40%',
            agency: '銀行業務検定',
          },
          {
            name: '経営支援アドバイザー2級',
            career: '銀行業務,コンサル業務',
            difficulty: 3,
            pass_rate: '30%',
            agency: '銀行業務検定',
          },
          {
            name: 'FP2級(総合・実技1科目以上)',
            career: '銀行業務,コンサル業務',
            difficulty: 3,
            pass_rate: '40%',
            agency: '銀行業務検定',
          },
          {
            name: '日商簿記2級',
            career: '銀行業務,コンサル業務',
            difficulty: 3,
            pass_rate: '20%',
            agency: '日本商工会議所',
          },
          {
            name: 'DCプランナー2級',
            career: 'ライフプラン業務',
            difficulty: 3,
            pass_rate: '40%',
            agency: '日本商工会議所',
          },
        ],
      }
    },
    methods: {
      onclick () {
        console.log(111)
      },
      update () {
        this.dialog = false
        this.$store.commit('updateLicense', { license: this.selected })
      },
    },
  }
</script>
