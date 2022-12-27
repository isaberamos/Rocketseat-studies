const getFlagValue = required('./flags')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)