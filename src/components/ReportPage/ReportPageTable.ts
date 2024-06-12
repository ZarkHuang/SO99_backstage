import { h } from 'vue';
import { NSpace, NCheckbox, NButton } from 'naive-ui';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

export const getTableColumns = (
  handleSelectAll: (checked: boolean) => void, 
  handleSelect: (checked: boolean, row: any) => void
) => {
  const columns = [
    {
      type: 'selection',
      key: 'checked',
      width: '50',
      renderHeader: () => h(NCheckbox, {
        onUpdateChecked: handleSelectAll
      }),
      render: (row: any) => h(NCheckbox, {
        key: row.id,
        checked: row.checked,
        'onUpdate:checked': (checked: boolean) => handleSelect(checked, row)
      })
    },
    {
      title: '用戶ID',
      key: 'id',
      width: '140',
      sorter: (a: { id: string; }, b: { id: string; }) => a.id.localeCompare(b.id),
    },
    {
      title: '管理同意',
      key: 'agree',
      width: '100',
      sorter: (a: { agree: string; }, b: { agree: string; }) => a.agree.localeCompare(b.agree),
      render: (row: any) => h('span', {
        style: {
          color: row.agree === '未回覆' ? '#DE5858' : 'black'
        } 
      }, row.agree)
    },
    {
      title: '所屬角色',
      key: 'position',
      width: '140',
      sorter: (a: { position: string; }, b: { position: string; }) => a.position.localeCompare(b.position),
      render: (row: any) => h('div', {
        style: {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '140px'
        }
      }, row.position)
    },
    {
      title: '體重正負',
      key: 'weight',
      width: '100',
      sorter: (a: { weight: string; }, b: { weight: string; }) => a.weight.localeCompare(b.weight),
      render: (row: any) => h('span', {
        style: {
          color: row.weight.startsWith('+') ? '#DE5858' : 'black'
        }
      }, row.weight)
    },
    {
      title: '體重狀態',
      key: 'weightSituation',
      width: '100',
      sorter: (a: { weightSituation: string; }, b: { weightSituation: string; }) => a.weightSituation.localeCompare(b.weightSituation),
    },
    {
      title: '性別',
      key: 'sex',
      width: '100',
      sorter: (a: { sex: string; }, b: { sex: string; }) => a.sex.localeCompare(b.sex),
    },
    {
      title: '年齡',
      key: 'age',
      width: '100',
      sorter: (a: { age: string; }, b: { age: string; }) => a.age.localeCompare(b.age),
    },
    {
      title: '健康分數',
      key: 'score',
      width: '100',
      sorter: (a: { score: string; }, b: { score: string; }) => a.score.localeCompare(b.score),
      render: (row: any) => h('span', {
        style: {
          color: parseInt(row.score) < 50 ? '#DE5858' : 'black'
        }
      }, row.score)
    },
    {
      title: '三高風險',
      key: 'risk',
      width: '120',
      sorter: (a: { risk: string; }, b: { risk: string; }) => a.risk.localeCompare(b.risk),
      render: (row: any) => h('span', {
        style: {
          color: row.risk === '高' ? '#DE5858' : 'black'
        }
      }, row.risk)
    },
    {
      title: '三高項目',
      key: 'riskItem',
      width: '140',
      sorter: (a: { riskItem: string; }, b: { riskItem: string; }) => a.riskItem.localeCompare(b.riskItem),
      render: (row: any) => h('div', {
        style: {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          maxWidth: '140px',
          color: row.riskItem.split('、').length >= 2 ? '#DE5858' : 'black'
        }
      }, row.riskItem)
    },
    {
      title: '建立日期',
      key: 'publishDate',
      width: '100',
      sorter: (a: { publishDate: string; }, b: { publishDate: string; }) => a.publishDate.localeCompare(b.publishDate),
    },
    {
      title: '更新日期',
      key: 'renewDate',
      width: '100',
      sorter: (a: { renewDate: string; }, b: { renewDate: string; }) => a.renewDate.localeCompare(b.renewDate),
    }
  ];

  return columns;
};

export const getMockTableData = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        checked: false,
        id: i.toString(),
        agree: i % 2 === 0 ? '同意' : '未回覆',
        position: i % 2 === 0 ? '長佳智能股份有限公司' : '其他公司',
        weight: i % 2 === 0 ? `-${(Math.random() * 1.5).toFixed(1)}` : `+${(Math.random() * 1.5).toFixed(1)}`,
        weightSituation: i % 2 === 0 ? '健康體重' : '體重過重',
        sex: i % 2 === 0 ? '男' : '女',
        age: (20 + i).toString(),
        score: (Math.random() * 100).toFixed(0),
        risk: i % 2 === 0 ? '低' : '高',
        riskItem: i % 2 === 0 ? '血脂' : '血脂、血壓、血糖',
        publishDate: '2023/10/07',
        renewDate: '2023/10/07'
      });
    }
    return data;
};
