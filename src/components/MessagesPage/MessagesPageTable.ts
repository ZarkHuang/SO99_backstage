import { h } from 'vue';
import { NCheckbox, NButton, NSpace } from 'naive-ui';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

export const getTableColumns = (handleEdit: (row: any) => void) => [
  {
    title: '訊息類別',
    key: 'category',
    width: '200',
    sorter: (a: { category: string; }, b: { category: string; }) => a.category.localeCompare(b.category),
  },
  {
    title: '訊息內容',
    key: 'content',
    width: '80',
    sorter: (a: { content: string; }, b: { content: string; }) => a.content.localeCompare(b.content),
    render: (row: any) => h('div', {
      style: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '800px'
      }
    }, row.content)
  },
  {
    title: '發送對象',
    key: 'person',
    width: '80',
    sorter: (a: { person: string; }, b: { person: string; }) => a.person.localeCompare(b.person),
    render: (row: any) => h('div', {
      style: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '260px'
      }
    }, row.person)
  },
  {
    title: '發送時間',
    key: 'sendTime',
    width: '140',
    sorter: (a: { sendTime: string; }, b: { sendTime: string; }) => a.sendTime.localeCompare(b.sendTime),
    render: (row: any) => row.sendTime
  },
  {
    title: '發送人員',
    key: 'sendPerson',
    width: '80',
    sorter: (a: { sendPerson: string; }, b: { sendPerson: string; }) => a.sendPerson.localeCompare(b.sendPerson),
  },
];

export const getMockTableData = () => {
  const data = [];
  for (let i = 1; i <= 20; i++) {
    data.push({
      checked: false,
      category: '健康類別',
      content: 'Hi,你好我很好你好嗎你好我好大家好好好好好好就好你好喔喔喔喔喔好好好好好我好好欸!喔喔喔是喔好啊好好好好我!喔喔喔是喔好啊好好好好我!喔喔喔是喔好啊好好好好我',
      person: 'ON12345678978945,ON12345678978945',
      sendTime: '2023/12/30 15:30',
      sendPerson: '王曉明',
    });
  }
  return data;
};
