function parseIva(text) {
    return [
        {
            task:'Learn HTML',
            completed:true
        },
        {
            task:'Learn CSS',
            completed:false
        }
    ];
}

function stringifyIva(dataStructure) {
    return `
        task:'Learn HTML',
        completed:true
        ===
        task:'Learn HTML',
        completed:true
    `;
}

const data = [
    {
        task:'Learn HTML',
        completed:true
    },
    {
        task:'Learn CSS',
        completed:false
    }
];

const dataStr = stringifyIva(data)
const dataStructure = parseIva(dataStr)








