import { h } from 'vue';
import { NSpace, NButton } from 'naive-ui';
import SvgIcon from '@/components/Icons/SvgIcon.vue';

export const getTableColumns = (handleEdit: (row: any) => void, handleSetting: (row: any) => void) => [
    {
        title: '用戶ID',
        key: 'id',
        width: '120',
        sorter: (a: { id: string; }, b: { id: string; }) => a.id.localeCompare(b.id),
    },
    {
        title: '姓名',
        key: 'name',
        width: '80',
        sorter: (a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name),
    },
    {
        title: '所屬角色',
        key: 'position',
        width: '120',
        sorter: (a: { position: string; }, b: { position: string; }) => a.position.localeCompare(b.position),
    },
    {
        title:'連絡電話',
        key: 'tel',
        width: '80',
        sorter: (a: { tel: string; }, b: { tel: string; }) => a.tel.localeCompare(b.tel),
    },
    {
        title: 'Email',
        key: 'email',
        width: '120',
        sorter: (a: { email: string; }, b: { email: string; }) => a.email.localeCompare(b.email),
    },
    {
        title: '性別',
        key: 'sex',
        width: '80',
        sorter: (a: { sex: string; }, b: { sex: string; }) => a.sex.localeCompare(b.sex),
    },
    {
        title: '年齡',
        key: 'age',
        width: '80',
        sorter: (a: { age: string; }, b: { age: string; }) => a.age.localeCompare(b.age),
    },
    {
        title: '設定',
        key: 'setting',
        width: '80',
        align: 'center',
        sorter: (a: { setting: string; }, b: { setting: string; }) => a.setting.localeCompare(b.setting),
        render(row: any) {
            if (row.setting === '已設定') {
                return h('span', '已設定');
            }
            return h(NButton, {
                type: 'primary',
                style: { padding: '8px 12px', fontSize: '14px', height:'32px' },
                onClick: () => handleSetting(row)
            }, { default: () => '設定' });
        }
    },
    {
        title: '管理同意',
        key: 'agree',
        width: '80',
        sorter: (a: { agree: string; }, b: { agree: string; }) => a.agree.localeCompare(b.agree),
        render(row: any) {
            return h('span', { style: { color: row.agree === '同意' ? 'black' : '#DE5858' } }, row.agree);
        }
    },
    {
        title: '操作',
        key: 'actions',
        width: '80',
        align: 'center',
        render(row: any) {
            return h(NSpace, { justify: 'space-around', align: 'center' }, {
                default: () => [
                    h(NButton, { 
                        quaternary: true,
                        class: 'edit-icon',
                        style: { cursor: 'pointer', padding: '0', width: '20px', height: '20px' },
                        onClick: () => handleEdit(row) 
                    }, {
                        default: () => h(SvgIcon, { icon: 'Edit', style: { width: '20px', height: '20px' } }) 
                    })
                ]
            });
        }
    }
];

// export const getMockTableData = () => [
//     { id: '21231567894', name: '王大明',  position: '中國醫藥大學附設醫院', tel:'0972804803' , email:'ss123@gmail.com', sex:'男',age:'78' ,setting:'設定',agree:'未回覆' ,level: '企業', active: true },
//     { id: '21231567894', name: '王大明',  position: '中國醫藥大學附設醫院', tel:'0972804803' , email:'ss123@gmail.com', sex:'男',age:'78' ,setting:'設定',agree:'未回覆' ,level: '企業', active: true },
// ];

export const getMockTableData = () => {
    const data = [];
    for (let i = 1; i <= 20; i++) {
        data.push({
            id: `2123156789${i}`,
            name: `R2D-${i}`,
            position: '中國醫藥大學附設醫院',
            tel: '0972804803',
            email: `ss123${i}@gmail.com`,
            sex: '男',
            age: `${20 + i}`,
            setting: '設定',
            agree: '未回覆',
            level: '企業',
            active: true
        });
    }
    return data;
};

