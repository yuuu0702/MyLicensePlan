<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
      />
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        singleSelect: false,
        selected: [],
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
        desserts: [
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
  }
</script>
