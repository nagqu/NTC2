//priority: 200

// Listen to item tag event
onEvent('item.tags', event => {

    event.remove('forge:dusts', 'thermal:iron_dust')
    event.remove('forge:dusts/iron', 'thermal:iron_dust')
    event.remove('forge:dusts', 'thermal:gold_dust')
    event.remove('forge:dusts/gold', 'thermal:gold_dust')
    event.remove('forge:dusts', 'thermal:lapis_dust')
    event.remove('forge:dusts/lapis', 'thermal:lapis_dust')
    event.remove('forge:dusts', 'thermal:diamond_dust')
    event.remove('forge:dusts/diamond', 'thermal:diamond_dust')
    event.remove('forge:dusts', 'thermal:emerald_dust')
    event.remove('forge:dusts/emerald', 'thermal:emerald_dust')
    event.remove('forge:dusts', 'thermal:quartz_dust')
    event.remove('forge:dusts/quartz', 'thermal:quartz_dust')
    event.remove('forge:dusts', 'thermal:copper_dust')
    event.remove('forge:dusts/copper', 'thermal:copper_dust')
    event.remove('forge:dusts', 'thermal:tin_dust')
    event.remove('forge:dusts/tin', 'thermal:tin_dust')
    event.remove('forge:dusts', 'thermal:lead_dust')
    event.remove('forge:dusts/lead', 'thermal:lead_dust')
    event.remove('forge:dusts', 'thermal:silver_dust')
    event.remove('forge:dusts/silver', 'thermal:silver_dust')
    event.remove('forge:dusts', 'thermal:nickel_dust')
    event.remove('forge:dusts/nickel', 'thermal:nickel_dust')
    event.remove('forge:dusts', 'thermal:bronze_dust')
    event.remove('forge:dusts/bronze', 'thermal:bronze_dust')
    event.remove('forge:dusts', 'thermal:enderium_dust')
    event.remove('forge:dusts/enderium', 'thermal:enderium_dust')
    event.remove('forge:dusts', 'thermal:lumium_dust')
    event.remove('forge:dusts/lumium', 'thermal:lumium_dust')
    event.remove('forge:dusts', 'thermal:signalum_dust')
    event.remove('forge:dusts/signalum', 'thermal:signalum_dust')
    event.remove('forge:dusts', 'thermal:constantan_dust')
    event.remove('forge:dusts/constantan', 'thermal:constantan_dust')
    event.remove('forge:dusts', 'thermal:electrum_dust')
    event.remove('forge:dusts/electrum', 'thermal:electrum_dust')
    event.remove('forge:dusts', 'thermal:invar_dust')
    event.remove('forge:dusts/invar', 'thermal:invar_dust')
    event.remove('forge:dusts', 'thermal:niter_dust')
    event.remove('forge:dusts/niter', 'thermal:niter_dust')
    event.remove('forge:dusts', 'thermal:cinnabar_dust')
    event.remove('forge:dusts/cinnabar', 'thermal:cinnabar_dust')
    event.remove('forge:dusts', 'thermal:sulfur_dust')
    event.remove('forge:dusts/sulfur', 'thermal:sulfur_dust')

    event.remove('forge:dusts', 'mekanism:dust_obsidian')
    event.remove('forge:dusts/obsidian', 'mekanism:dust_obsidian')
    event.remove('forge:dusts', 'mekanism:dust_osmium')
    event.remove('forge:dusts/osmium', 'mekanism:dust_osmium')
    event.remove('forge:dusts', 'mekanism:dust_coal')
    event.remove('forge:dusts/coal', 'mekanism:dust_coal')
    event.remove('forge:dusts', 'mekanism:dust_diamond')
    event.remove('forge:dusts/diamond', 'mekanism:dust_diamond')
    event.remove('forge:dusts', 'mekanism:dust_bronze')
    event.remove('forge:dusts/bronze', 'mekanism:dust_bronze')
    event.remove('forge:dusts', 'mekanism:dust_steel')
    event.remove('forge:dusts/steel', 'mekanism:dust_steel')
    event.remove('forge:dusts', 'mekanism:dust_uranium')
    event.remove('forge:dusts/uranium', 'mekanism:dust_uranium')
    event.remove('forge:dusts', 'mekanism:dust_emerald')
    event.remove('forge:dusts/emerald', 'mekanism:dust_emerald')
    event.remove('forge:dusts', 'mekanism:dust_tin')
    event.remove('forge:dusts/tin', 'mekanism:dust_tin')
    event.remove('forge:dusts', 'mekanism:dust_quartz')
    event.remove('forge:dusts/quartz', 'mekanism:dust_quartz')
    event.remove('forge:dusts', 'mekanism:dust_lead')
    event.remove('forge:dusts/lead', 'mekanism:dust_lead')
    event.remove('forge:dusts', 'mekanism:dust_gold')
    event.remove('forge:dusts/gold', 'mekanism:dust_gold')
    event.remove('forge:dusts', 'mekanism:dust_copper')
    event.remove('forge:dusts/copper', 'mekanism:dust_copper')
    event.remove('forge:dusts', 'mekanism:dust_iron')
    event.remove('forge:dusts/iron', 'mekanism:dust_iron')
    event.remove('forge:dusts', 'mekanism:dust_sulfur')
    event.remove('forge:dusts/sulfur', 'mekanism:dust_sulfur')
    event.remove('forge:dyes', 'mekanism:dust_sulfur')
    event.remove('forge:dyes/yellow', 'mekanism:dust_sulfur')

    event.remove('appliedenergistics2:silicon', 'appliedenergistics2:silicon')
    event.remove('appliedenergistics2:dusts/fluix', 'appliedenergistics2:fluix_dust')
    event.remove('forge:silicon', 'appliedenergistics2:silicon')
    event.remove('forge:dusts', 'appliedenergistics2:nether_quartz_dust')
    event.remove('forge:dusts/quartz', 'appliedenergistics2:nether_quartz_dust')
    event.remove('forge:dusts', 'appliedenergistics2:gold_dust')
    event.remove('forge:dusts/gold', 'appliedenergistics2:gold_dust')
    event.remove('forge:dusts', 'appliedenergistics2:iron_dust')
    event.remove('forge:dusts/iron', 'appliedenergistics2:iron_dust')
    event.remove('forge:dusts', 'appliedenergistics2:fluix_dust')
    event.remove('forge:dusts/fluix', 'appliedenergistics2:fluix_dust')

    event.remove('forge:dusts', 'lazierae2:coal_dust')
    event.remove('forge:dusts/coal', 'lazierae2:coal_dust')

    event.remove('forge:dusts', 'miniutilities:ender_dust')
    event.remove('forge:dusts/ender', 'miniutilities:ender_dust')

    event.remove('forge:dusts', 'immersiveengineering:dust_steel')
    event.remove('forge:dusts/steel', 'immersiveengineering:dust_steel')
    event.remove('forge:dusts', 'immersiveengineering:dust_uranium')
    event.remove('forge:dusts/uranium', 'immersiveengineering:dust_uranium')
    event.remove('forge:dusts', 'immersiveengineering:dust_aluminum')
    event.remove('forge:dusts/aluminum', 'immersiveengineering:dust_aluminum')
    event.remove('forge:dusts', 'immersiveengineering:dust_silver')
    event.remove('forge:dusts/silver', 'immersiveengineering:dust_silver')
    event.remove('forge:dusts', 'immersiveengineering:dust_lead')
    event.remove('forge:dusts/lead', 'immersiveengineering:dust_lead')
    event.remove('forge:dusts', 'immersiveengineering:dust_constantan')
    event.remove('forge:dusts/constantan', 'immersiveengineering:dust_constantan')
    event.remove('forge:dusts', 'immersiveengineering:dust_gold')
    event.remove('forge:dusts/gold', 'immersiveengineering:dust_gold')
    event.remove('forge:dusts', 'immersiveengineering:dust_copper')
    event.remove('forge:dusts/copper', 'immersiveengineering:dust_copper')
    event.remove('forge:dusts', 'immersiveengineering:dust_nickel')
    event.remove('forge:dusts/nickel', 'immersiveengineering:dust_nickel')
    event.remove('forge:dusts', 'immersiveengineering:dust_iron')
    event.remove('forge:dusts/iron', 'immersiveengineering:dust_iron')
    event.remove('forge:dusts', 'immersiveengineering:dust_electrum')
    event.remove('forge:dusts/electrum', 'immersiveengineering:dust_electrum')
    event.remove('forge:dusts', 'immersiveengineering:dust_sulfur')
    event.remove('forge:dusts/sulfur', 'immersiveengineering:dust_sulfur')


    event.add('forge:dusts', 'appliedenergistics2:sky_dust')
    event.add('forge:dusts/sky', 'appliedenergistics2:sky_dust')

    event.add('forge:dusts', 'betterendforge:endstone_dust')
    event.add('forge:dusts/end_stone', 'betterendforge:endstone_dust')
  })