# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog],
and this project adheres to [Semantic Versioning].

## [Unreleased]
- /

## [1.4.2] - 2022-05-06

### Added
- 

### Changed
- final singularities, Added 30 new singularities, completing the full recipe for final singularity
    activated_carbon, antimatter_relay_mk3, basic_smd_chip, colossal_star_omega, endest_pearl, energetic_alloy_ingot, energy_collector_mk3, energy_condenser_mk2, eternal_crystal, fluid_cell_frame, infinity_ingot, klein_star_omega, machine_frame, magnum_star_omega, overworld_portal, pity_machine_frame, populated_basic_pcb, printed_speculative_circuit, rainbow_furnace, redstone_flux_cell_frame, speculative_processor, steel_casing, the_final_opinium_core, the_ultimate_ingot, thermal_machine_frame, transistor, transmutation_interface, ultimate_conglomerate, ultimate_infusing_factory, uu_matter, vibrant_alloy_ingot

- dragon scales, some quests updated
    Added end game quest for Ultimate Conglomerate
    Added dragon scale quest, all dragon scales now count as the same tag so they should be universal now
    Added dragons breath recipe for "new" scales
    UUmatter recipes cleanup, tags using mekanism for some reason?

- creating color legend for quest standardization
    Upon making quests I didnt have a color legend and I just made it however I felt, now since working on quests it looks a little all over the place, creating a NTC standardized color code for Quest names, subtitles, items, etc

- discord int and fluidphysics
    Updated discord integration to beta version
    Updated fluidphysics config to better handle nether recipes and moved whitelist to blacklist (hopefully this fixes water/lava lag in nether/end)

- adding ultimate_conglomerate for chemlib endgame
    Created texture for ultimate conglomerate (endgame chemlib item)
    Uploaded chimneys image for adpother quests

- upload quest pictures
    Uploaded AE2 quartz fiber example picture and several betterend biome pictures from wiki

- Fix certus dust and hide certus
    Swapped EE certus/fluix with AE2 certus/fluix

- more fixes to AE2 certus, fluix, mod updates
    Swapped EE certus/fluix with AE2 certus/fluix
    Added experience pearl x8 singularity
    Removed fast workbench and furnace
    Added fastbenchminusreplacement-1.4.jar, fastfurnaceminusreplacement-1.1-1.16.3.jar
    Set stacksize of intdyn energy battery to 1
    Set EMC for AE2 certus
    Added cinnabar quest to thermal
    Fixed productive bee using wrong fluix block
    Added more info to spatial and blitz bee flowering page for blitz/spatial bee
    Updated to dcintegration-forge-2.3.5-1.16.jar

- fix certus quartz and cm
    Added nitrogen collector, fuel reprocessor, assembler and isotope separator to upgrade whitelist
    Swapped EE certus/fluix with AE2 certus/fluix
    Compact machines not accepting catalyst tag data and returns NULL singularity so for now changed to block of ultimate ingot (made git issue for CM (nano is aware of the issue now))
    added nitrogen collector recipe to extended crafting tier 1
    Changed Omega stars recipe: klein requires advanced component, magnum requires elite, colossal still requires ultimate 

- fixed nitrogen not being obtainable
    Removed adpother nitrogen
    Created nitrogen collector custom machine
    Added chemlib way to get nitrogen fluid/item

- update mods
    StorageDrawers-1.16.3-8.5.2.jar
    catalogue-1.6.1-1.16.5.jar
    configured-1.5.2-1.16.5.jar

- custom machines fixes
    Swapped EE certus/fluix with AE2 certus/fluix
    Added proper item count to custom machine recipes for the compact crafter
    Added charcoal dust recipe to pulverizer
    fancymenu_forge_2.7.0-1_MC_1.16.2-1.16.5.jar

- changelog switchup test
    Moved my old method of a changelog to _old suffix and created a new changelog.md with new format
    Swapped EE certus/fluix with AE2 certus/fluix
    Fixed mekanism dust sulfur being yellow dye
    Fixed mekanism coal dust being input/output and changed to EE

- final additions to cm
    Added compact crafter machine recipe for custom machines
    Added end resin processor machine recipe for custom machines (Thanks reddi)
    Removed Mekanism Matter quests out
    Changed all custom machines fluid capacity from 100000 to 10000
    Moved some GUI elements for custom machines
    Added compact crafter to upgrade whitelist
    Added husk, drowned, enderman heads to mystical agriculture recipes (essence)

- changes to mega unify scripts
    Updated Unify script to hopefully stop all that log spam

- fix solarflux, updates, custommachines
    Reduced solarflux from 100x to 10x to hopefully balance the mod better
    ProjectExpansion-1.16.5-1.0.22.jar
    entangled-1.3.11-forge-mc1.16.jar
    Added dump fluids button to ore leacher

- ignore vscode settings
- Merge pull request #58 from MechOrigin/MechOrigin/issue53
- Merge branch 'master' into MechOrigin/issue53


- fix emc for fuels and matter
    new EMC values for matter was wrong because projectexpansion uses new fuels, so updated to compensate for new fuel/matter value

- Kubejs warnings/error Fixes #53
    Fixed dissolution chamber looking for gray instead of grey

- IF laser drill over jellyfish issue Fixes #26
    Changed jellyfish to ender slime from betterend

- update custom machinery filters
    changed speed modifier to 50% to 10% per upgrade
    Added more filters to fluids and dump buttons to custom machines with fluids (this should help custom machines with fluid input/out stop conflicting (you will still need to setup proper filters though probably))
    Added mass fabricator and antimatter synthesizer recipes

### Deprecated

### Removed

### Fixed

### Security


## [0.0.1] - 2022-05-06
- initial release

<!-- Links -->
[keep a changelog]: https://keepachangelog.com/en/1.0.0/
[semantic versioning]: https://semver.org/spec/v2.0.0.html

<!-- Versions -->
[unreleased]: https://github.com/MechOrigin/NTC2/compare/v0.0.2...HEAD
[0.0.2]: https://github.com/MechOrigin/NTC2/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/MechOrigin/NTC2/releases/tag/v0.0.1



## [1.4.3] - 2022-05-07

### Changed
- Removed EMC value from EE certus (hopefully you exchanged all your certus before updating)
- Fixed certus drops defaulting to EE and melting recipes for certus
- Fixed certus unify issue where chunks defaulted to EE
- Changed all custom machines basic upgrade slot "mode" to insert because upgrade is invalid
- Swapped back to ProjectExpansion-1.16.5-1.0.21.jar because of bug
- Removed input specifics for compact crafter custom machine


## [1.4.4] - 2022-05-08

### Changed
- Collision Chamber can't produce anti-proton Fixes #52
    Solution was to add 2 fluid tanks of proton and leave the other recipe for proton and lead, now both craft fine
- Fixed compact machines issue, ever since adding the 7x7 compact recipe for compact crafter single block theres been an array index out of bounds
    Solution was to change the outside "-" as air into blocks of whatever. We chose plastic. Thanks Everyone for testing and finding a solution <3
- Fixed 1k AE2 components requiring any certus quartz as this is unintended and changed back to charged certus
- Fixed Certus/fluix not being meltable in magma crucible (left charged certus out because that doesn't make sense) Fixes #66 
    Fixed all fluix and certus unification hopefully for good this time by adding it back into materials.js and parsing out specific gems in unify_materials.js
- Added thermal chiller recipe for IF essence to experience pearl
- Changed tconstruct/materials.js structure
- Added recipe to pink slime fluid from balls
- Added 3 more item compartments in compact_crafter custom machine
- Fixed recipes for custom machines to reflect counterparts



## [1.4.5] - 2022-05-08

### Changed
- Fixed compact crafter requiring stack of 209 black plastic, requires 160 blocks of plastic now and I've added 12 slots for input in compact crafter
- Fixed Fluix gem quest in AE2 tab
- Added blocks recipes for black iron, Redstone, ender ingots
- Fixed Quark nether wart block 2x2 crafting recipe, disabled it. Now it should be default 3x3.
- Prior patch I added blast chiller recipe for experience (doesn't work). Removed recipe.
    Instead added crushed glass + experience to pearls
- Added plate recipes to thermal press for missing metals
- Fixed IE HOP graphite rod being 50% (this pack is hard enough, we dont need no 50% durability)
- Fixed mechanical squeezer not having any outputs at all or correct outputs
- Added mekanism crusher recipes
- Added wire recipes to thermal blast chiller
- Changed Rainbow furnace recipe. Removed RM/DM furnace recipe/jei
- Changed Rainbow furnace to be 2 ticks per operation
- Fixed spelling mistake transmutation interface singularity
- Added some heads to cagedmobs drops from respective mobs
- Removed charcoal/block from blast furnace fuel source
- Fixed nether quartz dust output from sieves being AE2 and not EE
- Changed rainbow furnace to not produce pollution
- Fixed painkiller mix and a few other recipes set to output2 and not output1 on a single output causing recipe to be invalid
- Changed sulfur bee to use sulfur block instead of vanilla coal block
- Removed regular opinium core recipes back to default extendedcrafting
- Added a few large ore deposits of some QOL gems
- Fixed a bunch of unreasonable singularities
- Updated:
    ProjectExpansion-1.16.5-1.0.24.jar
    IntegratedDynamics-1.16.5-1.10.10.jar


## [1.4.6] - 2022-05-12

### Changed
Initiative to cut down on autocrafting times:
- Added mekanism crushing recipes for some thermal pulverizer stuff
- Added custom infusion types and Infusion recipes
    Ender, Redstone Ingots now craftable in mekanism, as well as charged certus
- Added enriching, sawing recipes as well
- Added block processing recipes for lazierAE2 where I could and a few additions
Initiative to cut down on some grinds:
- Added neutronium to MA
- Added enderio alloys MA
- Added pink slime ingot to MA
- Added charged certus quartz to MA
QOL:
- Added crafting recipe to and from mek/EE charcoal dust and ender dust
- Added blocks that make sense to productive bee's flowering
- Added Monazite crystal to biotite drops for a source of cerium, lanthanum and thorium
- Added tarantula hawk to mob cages
- Fixed plate/gear etc recipes not showing in thermal chiller
- Fixed shapeless recipes not working properly due to invalid tags (protip: recipes wont validate if tag doesnt exist)
- Changed energy cost for end resin processor to 500 (reduced 100%) and increased yields of resin by 2x
- Added crafting recipe from polonium pellet to polonium ingot and back
- Added a way to automate tinkers glass faster
- Added Fluid drawers and removed tank/null
- Fixed certus quartz dupe bug
Updated:
    ProjectExpansion-1.16.5-1.0.26.jar
    Lazierae2-1.16.5-2.0.4.jar
    geckolib-forge-1.16.5-3.0.71.jar
    Iceberg-1.16.5-1.0.41.jar


## [1.4.7] - 2022-05-19

### Changed
## Lots has changed check your automation setups after updating
- Added lazierAE2 Etcher recipes
- Added 1-64k Storage Component Wafer recipes, and 256k-16m Storage Component Wafers
- Added 9x AE2 processor recipes
- Added silicon sheet (basically just 9x item) and recipes
- Added Tesseract recipe
- Compact machine recipes are directional. You must be facing north
- Removed opinium core singularity and replaced it with a AE2 singularity singularity (should save a ton of time)
- Changed basic upgrade to -20 ticks (addition) per upgrade to a maximum of 4 per machine
- Added logic,engineering,calculation processor wafers and recipes
- Added Glassy Redstone Sheet, and Charged Redstone Sheet and recipes (these are more cost efficient recipes, reducing material cost by roughly 4-8x)
- Changed assembler to be base 80 ticks
- changed ultimate conglomerate singularity to iron opinium core singularity
    the ultimate conglomerate singularity will be used instead on a final craft
    Ultimate conglomerate, time in a bottle singularities are still a thing but will be used in a separate recipe
- Changed chemistry machines to use more energy per tick but increased operations per tick (faster machines)
- Changed Endstone x5 requirement for endest pearl to x3
- changed 16m storage component to be 256k storage component in relay/collector
- Added some slot filters to custom machines (assembler only for now)
- Changed collector recipes to be more of a step.
- Changed ender ingot (because redundant because enhanced ender ingot) into 16m cell component singularity (now you need to craft 10000 instead of 360000)
- Balanced end game armor and gem armor a bit around conglomerate
- Added ultimate salad, and recipes for cosmic meatballs and ultimate stew
- Added ultimate singularity recipe
- Added recipes for a few more projecte items: gem of eternal density (which can now craft the void ring), volcanite amulet and evertide amulet
- Added infinity pipe upgrade recipe for pipez
- Changed single block custommachine compact crafter block catalyst to be ultimate ingot instead of block
- Changed base thermal energy usage to 20FE/t

### Mods Added/Updated
- Updated forge 26.2.35
AI-Improvements-1.16.5-0.5.0
BotanyPots-1.16.5-7.1.39
cofh_core-1.16.5-1.5.0.11
corail_woodcutter-1.16-2.0.2
CraftTweaker-1.16.5-7.1.2.510
architectury-1.32.63
custommachinery-1.16.5-0.5.8f
tombstone-6.7.6-1.16.5
lemonlib-1.4.2
CyclopsCore-1.16.5-1.12.4
DarkUtilities-1.16.5-8.0.14
engineersdecor-1.16.5-1.1.18
fancymenu_forge_2.7.2_MC_1.16.2-1.16.5
LegendaryTooltips-1.16.5-1.1.7
mowziesmobs-1.5.25
Numina-1.16.5-2.2.27
PackagedAuto-1.16.5-2.0.0.7
PackagedExCrafting-1.16.5-2.0.0.4
rftoolsbuilder-1.16-3.1.9
rftoolspower-1.16-3.0.14
supermartijn642corelib-1.0.18-forge-mc1.16.5
tesseract-1.0.26-forge-mc1.16
thermal_foundation-1.16.5-1.5.0.14
thermal_cultivation-1.16.5-1.5.0.4
thermal_expansion-1.16.5-1.5.0.7
thermal_innovation-1.16.5-1.5.0.4
thermal_locomotion-1.16.5-1.5.0.4
trashcans-1.0.15-forge-mc1.16
connectivity-2.4-1.16.5

### Fixed
- fixed pure certus block recipe missing
- fixed mutton patty recipe makes the item unobtainable
- Fixed a few enderio alloy blocks not having drops when broken
- Added lang to custom infuse_types and blocks to recipes
- Instead of disabling thermal crescent wrench because of dupe bug, just blacklisting block from right click with it
- Agricraft is not included in newer versions, flavor text removed from quests
- Added connectivity and config changes
- Added knowledge sharing book
- Fixed endstone dust unduping recipe lol
- fixed ae2 wireless terminals being affected by invtweaks, added rftools to morphotool whitelist - Thanks Kasama. Closes #76 and #85


## [1.4.8] - 2022-05-26

### Changed
- Remove unused avaritia stuff out of JEI
- Added botany pot recipes
    - End Steel Alloy
    - Energetic Alloy
    - Dark Steel Alloy
    - Charged Certus Quartz
    - Crystalline Pink Slime
    - Neutronium
    - Pink Slime Ingot
    - Melodic Alloy
    - vibrant Alloy
    - stellar Alloy
- Changed caged mobs tarantula hawk environment to sand
- Added mekanism combiner back in
- Added EE netherrack gold ore to nether gold bee sifting
- Added conversion recipe for mekanism charcoal dust because for some reason adpother doesn't want to output anything other than it
- Fixed most of the custom machines to use 80 ticks, a notable change to the slice n splice changed from 600 to 80
- Added all the crux crops to botany pots using their crux as their sole soil
- Added all the Mystical Agriculture essence recipes back (was a bug)
- Hopefully fixed some bottlenecks using thermal machines with energy consumption at high speeds
- Added quartz glass recipe via mek infusion
- Changed collector recipes to be more reasonable (needs testing)
- Tweaked assembler recipes and slice n splice that if there are less that 4 input materials it should work in any slot without conflict
- Fixed infused helmet recipe

## [1.4.9] - 2022-05-29

### Changed
- Change each tier of collectors to increase in tiers of components
    - 1k, 4k, 16k, 64k, 256k, 1m, 4m, 16m, 256k-wafer, 1m-wafer, 4m-wafer, 16m-wafer
- Removed ae2wtlib terminals all except wireless crafting terminal
- Projecte tome is now not craftable
- Removed matter upgrader recipe
- There is no effective way to add speculation core recipe to etcher without consuming cast so it is removed
- merged #95 - Thanks Kasama - added engineers workbench recipes to assembler
- reupload 1.4.9 to fix a kubejs error [1.4.9a]
- [1.4.9b] fixed thermal centriguge recipe for collectors

### Added
- pollutantpump-1.16.5-1.4.0.jar

<!-- TODO: fix thermal multiservo press quest
    TODO: Need to work on quests
    TODO: 
    TODO: add info to things like iron and such their melting points in tooltip
    TODO: add tinkers glass to chisel, as well as coralstone
    TODO: Add github repo to title screen
    TODO: explore if custom machine catalysts option can share chemlib recipes
    TODO: 
    TODO: 
    write custom infuse types with mekajs (bronze exists as alloy able to be made tin/copper)
    remove ae2 charger from jei and replace input recipes that use it with just charged certus block
    make fluid methane convert to item methane, among other chemistry stuff
-->

## [1.5.0] - 2022-07-02

### Changed
- Fixed spelling error for 256 Me storage wafer
- Added ferritecore (memory optimizations)
- Added Osmium chance to violecite, sulphuric rock, and flavolite in the end in addition to end stone
- Fixed osmium not being available in the end for the miner (industrial foregoing), black listed nether, but it's still available in OW
- Added xnet for people who like it
- updated some quest texts

## [1.5.0a] - 2022-07-03

### Changed
- Fixed mekanism crashing client/server
- Fixed some quest texts
- Tuned down insanium essence a bit for cages mobs

## [1.5.0b] - 2022-07-09

### Changed
- Fixed a chemistry chain (hydroxylamine)
- Sodium Hydroxide is now liquefiable
- Created fluid Tin Chloride
- Added liquid Vinegar recipe



## [1.5.1] - 2022-08-27

### Changed
- Changed wyml.json ITEM_DESPAWN_DENYLIST added AE2 crystal seeds (Thanks Aluminus)
- Updated to ExtendedCrafting-1.16.5-3.1.12 to fix the free ultimate singularity bug (Thanks everyone involved)
- Updated custommachinery-1.16.5-0.5.8i.jar, CyclopsCore-1.16.5-1.13.0.jar, dcintegration-forge-2.4.7-1.16.jar, MasterfulMachinery-1.16.5-0.1.66-B1041.jar,
sophisticatedbackpacks-1.16.5-3.15.16.669.jar, ProjectExpansion-1.16.5-1.0.32.jar, potiondescriptions-1.16.5-1.5.4.jar, nether-s-exoticism-1.16.5-1.1.10.jar, 

- Fix Pink slime comb - git #119
- Fix inv tweaks - git #116
- Fix two ultimate singularity recipes - git #114
- Fix Quartz/Flint mesh quest text error
- Fixed most extended crafting recipes hard requiring a specific table, if it can be crafted in table 2 it should be able to be crafted in 3 and 4 now
- Fix End Resin Processor MK2 not displaying as MK2, the single block machine is obviously only craftable after crafting the multiblock - git #110
- Fix compact crafting mk2 not displaying as mk2
- Fixed flat 4x rate of solarflux crafts, made it exponential per 2 tiers - git #107
- Fixed mystical agri double essence recipes
- Removed betternether basalt and blackstone stalactite recipes
- Fixed item dupe method with sophisticated backpacks until fastworkbench compat can be fixed disabled recipe
- Added quests to bees and mystical agri (Thanks Luthys)
- Added curious support for resperators (head) Thanks DjefNUKEM
