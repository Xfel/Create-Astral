function addTinkerTableVariants(list, item, chipped_block, max_num) {
    for (let num = 1; num <= max_num; num++) {
        list.push(Item.of(item, `{texture:"chipped:${chipped_block}_${num}"}`));
    }
}

onEvent("rei.hide.items", (event) => {
    var HIDDEN_ITEMS = [
        "ae2:silicon",
        "extended_drawers:t1_upgrade",
        "extended_drawers:t2_upgrade",
        "extended_drawers:t3_upgrade",
        "extended_drawers:t4_upgrade",
        "extended_drawers:creative_upgrade",
        "ad_astra:desh_cable",
        "ad_astra:desh_fluid_pipe",
        "ad_astra:ostrum_fluid_pipe",
        "ad_astra:steel_cable",
        "ad_astra:iron_plate",
        "automobility:acacia_planks_slope",
        "automobility:ancient_debris_slope",
        "automobility:andesite_slope",
        "automobility:bedrock_slope",
        "automobility:birch_planks_slope",
        "automobility:black_concrete_slope",
        "automobility:black_terracotta_slope",
        "automobility:black_wool_slope",
        "automobility:blackstone_slope",
        "automobility:blue_concrete_slope",
        "automobility:blue_terracotta_slope",
        "automobility:blue_wool_slope",
        "automobility:bookshelf_slope",
        "automobility:bricks_slope",
        "automobility:brown_concrete_slope",
        "automobility:brown_terracotta_slope",
        "automobility:brown_wool_slope",
        "automobility:calcite_slope",
        "automobility:chiseled_deepslate_slope",
        "automobility:chiseled_nether_bricks_slope",
        "automobility:chiseled_polished_blackstone_slope",
        "automobility:chiseled_quartz_block_slope",
        "automobility:chiseled_red_sandstone_slope",
        "automobility:chiseled_sandstone_slope",
        "automobility:chiseled_stone_bricks_slope",
        "automobility:clay_slope",
        "automobility:coal_block_slope",
        "automobility:coarse_dirt_slope",
        "automobility:cobbled_deepslate_slope",
        "automobility:cobblestone_slope",
        "automobility:cracked_deepslate_bricks_slope",
        "automobility:cracked_deepslate_tiles_slope",
        "automobility:cracked_nether_bricks_slope",
        "automobility:cracked_polished_blackstone_bricks_slope",
        "automobility:cracked_stone_bricks_slope",
        "automobility:crimson_planks_slope",
        "automobility:cut_red_sandstone_slope",
        "automobility:cut_sandstone_slope",
        "automobility:cyan_concrete_slope",
        "automobility:cyan_terracotta_slope",
        "automobility:cyan_wool_slope",
        "automobility:dark_oak_planks_slope",
        "automobility:dark_prismarine_slope",
        "automobility:dead_brain_coral_block_slope",
        "automobility:dead_bubble_coral_block_slope",
        "automobility:dead_fire_coral_block_slope",
        "automobility:dead_horn_coral_block_slope",
        "automobility:dead_tube_coral_block_slope",
        "automobility:deepslate_bricks_slope",
        "automobility:deepslate_tiles_slope",
        "automobility:diamond_block_slope",
        "automobility:diorite_slope",
        "automobility:dirt_slope",
        "automobility:dried_kelp_block_slope",
        "automobility:dripstone_block_slope",
        "automobility:emerald_block_slope",
        "automobility:end_stone_bricks_slope",
        "automobility:end_stone_slope",
        "automobility:gilded_blackstone_slope",
        "automobility:glowstone_slope",
        "automobility:gold_block_slope",
        "automobility:granite_slope",
        "automobility:gray_concrete_slope",
        "automobility:gray_terracotta_slope",
        "automobility:gray_wool_slope",
        "automobility:green_concrete_slope",
        "automobility:green_terracotta_slope",
        "automobility:green_wool_slope",
        "automobility:honeycomb_block_slope",
        "automobility:iron_block_slope",
        "automobility:jungle_planks_slope",
        "automobility:lapis_block_slope",
        "automobility:light_blue_concrete_slope",
        "automobility:light_blue_terracotta_slope",
        "automobility:light_blue_wool_slope",
        "automobility:light_gray_concrete_slope",
        "automobility:light_gray_terracotta_slope",
        "automobility:light_gray_wool_slope",
        "automobility:lime_concrete_slope",
        "automobility:lime_terracotta_slope",
        "automobility:lime_wool_slope",
        "automobility:lodestone_slope",
        "automobility:magenta_concrete_slope",
        "automobility:magenta_terracotta_slope",
        "automobility:magenta_wool_slope",
        "automobility:mossy_cobblestone_slope",
        "automobility:mossy_stone_bricks_slope",
        "automobility:nether_bricks_slope",
        "automobility:nether_wart_block_slope",
        "automobility:netherite_block_slope",
        "automobility:oak_planks_slope",
        "automobility:obsidian_slope",
        "automobility:orange_concrete_slope",
        "automobility:orange_terracotta_slope",
        "automobility:orange_wool_slope",
        "automobility:packed_ice_slope",
        "automobility:pink_concrete_slope",
        "automobility:pink_terracotta_slope",
        "automobility:pink_wool_slope",
        "automobility:polished_andesite_slope",
        "automobility:polished_blackstone_bricks_slope",
        "automobility:polished_blackstone_slope",
        "automobility:polished_deepslate_slope",
        "automobility:polished_diorite_slope",
        "automobility:polished_granite_slope",
        "automobility:prismarine_bricks_slope",
        "automobility:prismarine_slope",
        "automobility:purple_concrete_slope",
        "automobility:purple_terracotta_slope",
        "automobility:purple_wool_slope",
        "automobility:purpur_block_slope",
        "automobility:quartz_block_slope",
        "automobility:quartz_bricks_slope",
        "automobility:raw_copper_block_slope",
        "automobility:raw_gold_block_slope",
        "automobility:raw_iron_block_slope",
        "automobility:red_concrete_slope",
        "automobility:red_nether_bricks_slope",
        "automobility:red_sandstone_slope",
        "automobility:red_terracotta_slope",
        "automobility:red_wool_slope",
        "automobility:sandstone_slope",
        "automobility:sea_lantern_slope",
        "automobility:shroomlight_slope",
        "automobility:smooth_basalt_slope",
        "automobility:smooth_quartz_slope",
        "automobility:smooth_red_sandstone_slope",
        "automobility:smooth_sandstone_slope",
        "automobility:smooth_stone_slope",
        "automobility:snow_block_slope",
        "automobility:soul_soil_slope",
        "automobility:spruce_planks_slope",
        "automobility:steep_acacia_planks_slope",
        "automobility:steep_ancient_debris_slope",
        "automobility:steep_andesite_slope",
        "automobility:steep_bedrock_slope",
        "automobility:steep_birch_planks_slope",
        "automobility:steep_black_concrete_slope",
        "automobility:steep_black_terracotta_slope",
        "automobility:steep_black_wool_slope",
        "automobility:steep_blackstone_slope",
        "automobility:steep_blue_concrete_slope",
        "automobility:steep_blue_terracotta_slope",
        "automobility:steep_blue_wool_slope",
        "automobility:steep_bookshelf_slope",
        "automobility:steep_bricks_slope",
        "automobility:steep_brown_concrete_slope",
        "automobility:steep_brown_terracotta_slope",
        "automobility:steep_brown_wool_slope",
        "automobility:steep_calcite_slope",
        "automobility:steep_chiseled_deepslate_slope",
        "automobility:steep_chiseled_nether_bricks_slope",
        "automobility:steep_chiseled_polished_blackstone_slope",
        "automobility:steep_chiseled_quartz_block_slope",
        "automobility:steep_chiseled_red_sandstone_slope",
        "automobility:steep_chiseled_sandstone_slope",
        "automobility:steep_chiseled_stone_bricks_slope",
        "automobility:steep_clay_slope",
        "automobility:steep_coal_block_slope",
        "automobility:steep_coarse_dirt_slope",
        "automobility:steep_cobbled_deepslate_slope",
        "automobility:steep_cobblestone_slope",
        "automobility:steep_cracked_deepslate_bricks_slope",
        "automobility:steep_cracked_deepslate_tiles_slope",
        "automobility:steep_cracked_nether_bricks_slope",
        "automobility:steep_cracked_polished_blackstone_bricks_slope",
        "automobility:steep_cracked_stone_bricks_slope",
        "automobility:steep_crimson_planks_slope",
        "automobility:steep_cut_red_sandstone_slope",
        "automobility:steep_cut_sandstone_slope",
        "automobility:steep_cyan_concrete_slope",
        "automobility:steep_cyan_terracotta_slope",
        "automobility:steep_cyan_wool_slope",
        "automobility:steep_dark_oak_planks_slope",
        "automobility:steep_dark_prismarine_slope",
        "automobility:steep_dead_brain_coral_block_slope",
        "automobility:steep_dead_bubble_coral_block_slope",
        "automobility:steep_dead_fire_coral_block_slope",
        "automobility:steep_dead_horn_coral_block_slope",
        "automobility:steep_dead_tube_coral_block_slope",
        "automobility:steep_deepslate_bricks_slope",
        "automobility:steep_deepslate_tiles_slope",
        "automobility:steep_diamond_block_slope",
        "automobility:steep_diorite_slope",
        "automobility:steep_dirt_slope",
        "automobility:steep_dried_kelp_block_slope",
        "automobility:steep_dripstone_block_slope",
        "automobility:steep_emerald_block_slope",
        "automobility:steep_end_stone_bricks_slope",
        "automobility:steep_end_stone_slope",
        "automobility:steep_gilded_blackstone_slope",
        "automobility:steep_glowstone_slope",
        "automobility:steep_gold_block_slope",
        "automobility:steep_granite_slope",
        "automobility:steep_gray_concrete_slope",
        "automobility:steep_gray_terracotta_slope",
        "automobility:steep_gray_wool_slope",
        "automobility:steep_green_concrete_slope",
        "automobility:steep_green_terracotta_slope",
        "automobility:steep_green_wool_slope",
        "automobility:steep_honeycomb_block_slope",
        "automobility:steep_iron_block_slope",
        "automobility:steep_jungle_planks_slope",
        "automobility:steep_lapis_block_slope",
        "automobility:steep_light_blue_concrete_slope",
        "automobility:steep_light_blue_terracotta_slope",
        "automobility:steep_light_blue_wool_slope",
        "automobility:steep_light_gray_concrete_slope",
        "automobility:steep_light_gray_terracotta_slope",
        "automobility:steep_light_gray_wool_slope",
        "automobility:steep_lime_concrete_slope",
        "automobility:steep_lime_terracotta_slope",
        "automobility:steep_lime_wool_slope",
        "automobility:steep_lodestone_slope",
        "automobility:steep_magenta_concrete_slope",
        "automobility:steep_magenta_terracotta_slope",
        "automobility:steep_magenta_wool_slope",
        "automobility:steep_mossy_cobblestone_slope",
        "automobility:steep_mossy_stone_bricks_slope",
        "automobility:steep_nether_bricks_slope",
        "automobility:steep_nether_wart_block_slope",
        "automobility:steep_netherite_block_slope",
        "automobility:steep_oak_planks_slope",
        "automobility:steep_obsidian_slope",
        "automobility:steep_orange_concrete_slope",
        "automobility:steep_orange_terracotta_slope",
        "automobility:steep_orange_wool_slope",
        "automobility:steep_packed_ice_slope",
        "automobility:steep_pink_concrete_slope",
        "automobility:steep_pink_terracotta_slope",
        "automobility:steep_pink_wool_slope",
        "automobility:steep_polished_andesite_slope",
        "automobility:steep_polished_blackstone_bricks_slope",
        "automobility:steep_polished_blackstone_slope",
        "automobility:steep_polished_deepslate_slope",
        "automobility:steep_polished_diorite_slope",
        "automobility:steep_polished_granite_slope",
        "automobility:steep_prismarine_bricks_slope",
        "automobility:steep_prismarine_slope",
        "automobility:steep_purple_concrete_slope",
        "automobility:steep_purple_terracotta_slope",
        "automobility:steep_purple_wool_slope",
        "automobility:steep_purpur_block_slope",
        "automobility:steep_quartz_block_slope",
        "automobility:steep_quartz_bricks_slope",
        "automobility:steep_raw_copper_block_slope",
        "automobility:steep_raw_gold_block_slope",
        "automobility:steep_raw_iron_block_slope",
        "automobility:steep_red_concrete_slope",
        "automobility:steep_red_nether_bricks_slope",
        "automobility:steep_red_sandstone_slope",
        "automobility:steep_red_terracotta_slope",
        "automobility:steep_red_wool_slope",
        "automobility:steep_sandstone_slope",
        "automobility:steep_sea_lantern_slope",
        "automobility:steep_shroomlight_slope",
        "automobility:steep_smooth_basalt_slope",
        "automobility:steep_smooth_quartz_slope",
        "automobility:steep_smooth_red_sandstone_slope",
        "automobility:steep_smooth_sandstone_slope",
        "automobility:steep_smooth_stone_slope",
        "automobility:steep_snow_block_slope",
        "automobility:steep_soul_soil_slope",
        "automobility:steep_spruce_planks_slope",
        "automobility:steep_stone_bricks_slope",
        "automobility:steep_stone_slope",
        "automobility:steep_terracotta_slope",
        "automobility:steep_tuff_slope",
        "automobility:steep_warped_planks_slope",
        "automobility:steep_warped_wart_block_slope",
        "automobility:steep_waxed_copper_block_slope",
        "automobility:steep_waxed_cut_copper_slope",
        "automobility:steep_waxed_exposed_copper_slope",
        "automobility:steep_waxed_exposed_cut_copper_slope",
        "automobility:steep_waxed_oxidized_copper_slope",
        "automobility:steep_waxed_oxidized_cut_copper_slope",
        "automobility:steep_waxed_weathered_copper_slope",
        "automobility:steep_waxed_weathered_cut_copper_slope",
        "automobility:steep_white_concrete_slope",
        "automobility:steep_white_terracotta_slope",
        "automobility:steep_white_wool_slope",
        "automobility:steep_yellow_concrete_slope",
        "automobility:steep_yellow_terracotta_slope",
        "automobility:steep_yellow_wool_slope",
        "automobility:stone_bricks_slope",
        "automobility:stone_slope",
        "automobility:terracotta_slope",
        "automobility:tuff_slope",
        "automobility:warped_planks_slope",
        "automobility:warped_wart_block_slope",
        "automobility:waxed_copper_block_slope",
        "automobility:waxed_cut_copper_slope",
        "automobility:waxed_exposed_copper_slope",
        "automobility:waxed_exposed_cut_copper_slope",
        "automobility:waxed_oxidized_copper_slope",
        "automobility:waxed_oxidized_cut_copper_slope",
        "automobility:waxed_weathered_copper_slope",
        "automobility:waxed_weathered_cut_copper_slope",
        "automobility:white_concrete_slope",
        "automobility:white_terracotta_slope",
        "automobility:white_wool_slope",
        "automobility:yellow_concrete_slope",
        "automobility:yellow_terracotta_slope",
        "automobility:yellow_wool_slope",
        "campanion:camping_pack",
        "campanion:day_pack",
        "campanion:tanned_leather",
        "campanion:tanned_leather_pouch",
        "dbe:basic_circuit",
        "dbe:steel_ingot",
        "minecraft:barrier",
        "minecraft:chain_command_block",
        "minecraft:chipped_anvil",
        "minecraft:command_block",
        "minecraft:creeper_head",
        "minecraft:damaged_anvil",
        "minecraft:light",
        "minecraft:player_head",
        "minecraft:repeating_command_block",
        "minecraft:sculk_sensor",
        "minecraft:skeleton_skull",
        "minecraft:zombie_head",
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:acacia_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:acacia_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:birch_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:birch_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:crimson_hyphae"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:crimson_stem"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:dark_oak_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:dark_oak_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:jungle_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:jungle_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:oak_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:spruce_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:spruce_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_acacia_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_acacia_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_birch_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_birch_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_crimson_hyphae"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_crimson_stem"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_dark_oak_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_dark_oak_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_jungle_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_jungle_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_oak_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_oak_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_spruce_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_spruce_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_warped_hyphae"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_warped_stem"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:warped_hyphae"}'),
        Item.of("tconstruct:crafting_station", '{texture:"minecraft:warped_stem"}'),
        Item.of("tconstruct:crafting_station", '{texture:"tconstruct:bloodshroom_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"tconstruct:bloodshroom_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"tconstruct:greenheart_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"tconstruct:greenheart_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"tconstruct:skyroot_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"tconstruct:skyroot_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"tconstruct:stripped_bloodshroom_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"tconstruct:stripped_bloodshroom_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"tconstruct:stripped_greenheart_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"tconstruct:stripped_greenheart_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"tconstruct:stripped_skyroot_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"tconstruct:stripped_skyroot_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"techreborn:rubber_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"techreborn:rubber_log_stripped"}'),
        Item.of("tconstruct:crafting_station", '{texture:"techreborn:rubber_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"techreborn:stripped_rubber_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"vinery:cherry_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"vinery:cherry_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"vinery:old_cherry_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"vinery:old_cherry_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"vinery:stripped_cherry_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"vinery:stripped_cherry_wood"}'),
        Item.of("tconstruct:crafting_station", '{texture:"vinery:stripped_old_cherry_log"}'),
        Item.of("tconstruct:crafting_station", '{texture:"vinery:stripped_old_cherry_wood"}'),
        Item.of("tconstruct:part_builder", '{texture:"ad_astra:glacian_planks"}'),
        Item.of("tconstruct:part_builder", '{texture:"minecraft:acacia_planks"}'),
        Item.of("tconstruct:part_builder", '{texture:"minecraft:birch_planks"}'),
        Item.of("tconstruct:part_builder", '{texture:"minecraft:crimson_planks"}'),
        Item.of("tconstruct:part_builder", '{texture:"minecraft:dark_oak_planks"}'),
        Item.of("tconstruct:part_builder", '{texture:"minecraft:jungle_planks"}'),
        Item.of("tconstruct:part_builder", '{texture:"minecraft:spruce_planks"}'),
        Item.of("tconstruct:part_builder", '{texture:"minecraft:warped_planks"}'),
        Item.of("tconstruct:part_builder", '{texture:"tconstruct:bloodshroom_planks"}'),
        Item.of("tconstruct:part_builder", '{texture:"tconstruct:greenheart_planks"}'),
        Item.of("tconstruct:part_builder", '{texture:"tconstruct:skyroot_planks"}'),
        Item.of("tconstruct:part_builder", '{texture:"techreborn:rubber_planks"}'),
        Item.of("tconstruct:part_builder", '{texture:"vinery:cherry_planks"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:awkward"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:fire_resistance"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:harming"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:healing"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:invisibility"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:leaping"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_fire_resistance"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_invisibility"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_leaping"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_night_vision"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_poison"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_regeneration"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_slow_falling"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_slowness"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_strength"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_swiftness"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_turtle_master"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_water_breathing"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_weakness"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:luck"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:mundane"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:night_vision"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:poison"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:regeneration"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:slow_falling"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:slowness"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strength"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_harming"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_healing"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_leaping"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_poison"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_regeneration"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_slowness"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_strength"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_swiftness"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_turtle_master"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:swiftness"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:thick"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:turtle_master"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:water"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:water_breathing"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:weakness"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"naturalist:forest_dasher"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"naturalist:glowing"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"naturalist:long_forest_dasher"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"naturalist:long_glowing"}'),
        Item.of("tconstruct:potion_bucket", '{Potion:"naturalist:strong_forest_dasher"}'),
        Item.of("tconstruct:tinker_station", '{texture:"ad_astra:glacian_planks"}'),
        Item.of("tconstruct:tinker_station", '{texture:"minecraft:acacia_planks"}'),
        Item.of("tconstruct:tinker_station", '{texture:"minecraft:birch_planks"}'),
        Item.of("tconstruct:tinker_station", '{texture:"minecraft:crimson_planks"}'),
        Item.of("tconstruct:tinker_station", '{texture:"minecraft:dark_oak_planks"}'),
        Item.of("tconstruct:tinker_station", '{texture:"minecraft:jungle_planks"}'),
        Item.of("tconstruct:tinker_station", '{texture:"minecraft:spruce_planks"}'),
        Item.of("tconstruct:tinker_station", '{texture:"minecraft:warped_planks"}'),
        Item.of("tconstruct:tinker_station", '{texture:"tconstruct:bloodshroom_planks"}'),
        Item.of("tconstruct:tinker_station", '{texture:"tconstruct:greenheart_planks"}'),
        Item.of("tconstruct:tinker_station", '{texture:"tconstruct:skyroot_planks"}'),
        Item.of("tconstruct:tinker_station", '{texture:"techreborn:rubber_planks"}'),
        Item.of("tconstruct:tinker_station", '{texture:"vinery:cherry_planks"}'),
        "techreborn:advanced_alloy_plate",
        "techreborn:advanced_alloy_storage_block",
        "techreborn:advanced_alloy_storage_block_slab",
        "techreborn:advanced_alloy_storage_block_stairs",
        "techreborn:advanced_alloy_storage_block_wall",
        "techreborn:advanced_circuit",
        Item.of("techreborn:bronze_axe", "{Damage:0}"),
        Item.of("techreborn:bronze_boots", "{Damage:0}"),
        Item.of("techreborn:bronze_chestplate", "{Damage:0}"),
        Item.of("techreborn:bronze_helmet", "{Damage:0}"),
        Item.of("techreborn:bronze_hoe", "{Damage:0}"),
        Item.of("techreborn:bronze_ingot"),
        Item.of("techreborn:bronze_leggings", "{Damage:0}"),
        Item.of("techreborn:bronze_pickaxe", "{Damage:0}"),
        Item.of("techreborn:bronze_plate"),
        Item.of("techreborn:bronze_spade", "{Damage:0}"),
        Item.of("techreborn:bronze_storage_block"),
        Item.of("techreborn:bronze_storage_block_slab"),
        Item.of("techreborn:bronze_storage_block_stairs"),
        Item.of("techreborn:bronze_storage_block_wall"),
        Item.of("techreborn:bronze_sword", "{Damage:0}"),
        Item.of("techreborn:cell", '{fluid:"tconstruct:molten_constantan"}'),
        Item.of("techreborn:cell", '{fluid:"tconstruct:molten_enderium"}'),
        Item.of("techreborn:cell", '{fluid:"tconstruct:molten_knightslime"}'),
        Item.of("techreborn:cell", '{fluid:"tconstruct:molten_lumium"}'),
        Item.of("techreborn:cell", '{fluid:"tconstruct:molten_osmium"}'),
        Item.of("techreborn:cell", '{fluid:"tconstruct:molten_pewter"}'),
        Item.of("techreborn:cell", '{fluid:"tconstruct:molten_refined_glowstone"}'),
        Item.of("techreborn:cell", '{fluid:"tconstruct:molten_refined_obsidian"}'),
        Item.of("techreborn:cell", '{fluid:"tconstruct:molten_signalum"}'),
        Item.of("techreborn:cell", '{fluid:"tconstruct:molten_soulsteel"}'),
        "techreborn:copper_nugget",
        "techreborn:data_storage_core",
        "techreborn:energy_crystal",
        Item.of("techreborn:energy_crystal", "{energy:1000000L}"),
        "techreborn:hot_tungstensteel_ingot",
        "techreborn:hot_tungstensteel_nugget",
        "techreborn:hot_tungstensteel_storage_block",
        "techreborn:hot_tungstensteel_storage_block_slab",
        "techreborn:hot_tungstensteel_storage_block_stairs",
        "techreborn:hot_tungstensteel_storage_block_wall",
        "techreborn:iridium_reinforced_stone_storage_block",
        "techreborn:iridium_reinforced_stone_storage_block_slab",
        "techreborn:iridium_reinforced_stone_storage_block_stairs",
        "techreborn:iridium_reinforced_stone_storage_block_wall",
        "techreborn:iridium_reinforced_tungstensteel_storage_block",
        "techreborn:iridium_reinforced_tungstensteel_storage_block_slab",
        "techreborn:iridium_reinforced_tungstensteel_storage_block_stairs",
        "techreborn:iridium_reinforced_tungstensteel_storage_block_wall",
        "techreborn:iridium_storage_block_wall",
        "techreborn:lapotron_crystal",
        Item.of("techreborn:lapotron_crystal", "{energy:10000000L}"),
        "techreborn:nickel_nugget",
        Item.of("techreborn:peridot_axe", "{Damage:0}"),
        Item.of("techreborn:peridot_boots", "{Damage:0}"),
        Item.of("techreborn:peridot_chestplate", "{Damage:0}"),
        Item.of("techreborn:peridot_helmet", "{Damage:0}"),
        Item.of("techreborn:peridot_hoe", "{Damage:0}"),
        Item.of("techreborn:peridot_leggings", "{Damage:0}"),
        Item.of("techreborn:peridot_pickaxe", "{Damage:0}"),
        Item.of("techreborn:peridot_spade", "{Damage:0}"),
        Item.of("techreborn:peridot_sword", "{Damage:0}"),
        "techreborn:raw_tungsten",
        "techreborn:refined_iron_ingot",
        "techreborn:refined_iron_nugget",
        "techreborn:refined_iron_plate",
        "techreborn:refined_iron_storage_block",
        "techreborn:refined_iron_storage_block_slab",
        "techreborn:refined_iron_storage_block_stairs",
        "techreborn:refined_iron_storage_block_wall",
        Item.of("techreborn:ruby_axe", "{Damage:0}"),
        Item.of("techreborn:ruby_boots", "{Damage:0}"),
        Item.of("techreborn:ruby_chestplate", "{Damage:0}"),
        Item.of("techreborn:ruby_helmet", "{Damage:0}"),
        Item.of("techreborn:ruby_hoe", "{Damage:0}"),
        Item.of("techreborn:ruby_leggings", "{Damage:0}"),
        Item.of("techreborn:ruby_pickaxe", "{Damage:0}"),
        Item.of("techreborn:ruby_spade", "{Damage:0}"),
        Item.of("techreborn:ruby_sword", "{Damage:0}"),
        Item.of("techreborn:sapphire_axe", "{Damage:0}"),
        Item.of("techreborn:sapphire_boots", "{Damage:0}"),
        Item.of("techreborn:sapphire_chestplate", "{Damage:0}"),
        Item.of("techreborn:sapphire_helmet", "{Damage:0}"),
        Item.of("techreborn:sapphire_hoe", "{Damage:0}"),
        Item.of("techreborn:sapphire_leggings", "{Damage:0}"),
        Item.of("techreborn:sapphire_pickaxe", "{Damage:0}"),
        Item.of("techreborn:sapphire_spade", "{Damage:0}"),
        Item.of("techreborn:sapphire_sword", "{Damage:0}"),
        Item.of("techreborn:silver_boots", "{Damage:0}"),
        Item.of("techreborn:silver_chestplate", "{Damage:0}"),
        Item.of("techreborn:silver_helmet", "{Damage:0}"),
        Item.of("techreborn:silver_leggings", "{Damage:0}"),
        Item.of("techreborn:steel_boots", "{Damage:0}"),
        Item.of("techreborn:steel_chestplate", "{Damage:0}"),
        Item.of("techreborn:steel_helmet", "{Damage:0}"),
        "techreborn:steel_ingot",
        Item.of("techreborn:steel_leggings", "{Damage:0}"),
        "techreborn:steel_nugget",
        "techreborn:steel_plate",
        "techreborn:steel_storage_block",
        "techreborn:steel_storage_block_slab",
        "techreborn:steel_storage_block_stairs",
        "techreborn:steel_storage_block_wall",
        "techreborn:neutron_reflector",
        "techreborn:thick_neturon_reflector",
        "techreborn:iridium_neutron_reflector",
        "techreborn:mixed_metal_ingot",
        "techreborn:glowstone_small_dust",
        "techreborn:redstone_small_dust",
        "techreborn:bauxite_ore",
        "techreborn:cinnabar_ore",
        "techreborn:galena_ore",
        "techreborn:pyrite_ore",
        "techreborn:sheldonite_ore",
        "techreborn:sodalite_ore",
        "techreborn:sphalerite_ore",
        "techreborn:tungsten_ore",
        "techreborn:deepslate_bauxite_ore",
        "techreborn:deepslate_sheldonite_ore",
        "techreborn:deepslate_sodalite_ore",
        "techreborn:deepslate_tungsten_ore",
        "techreborn:raw_tungsten_storage_block",
        "techreborn:raw_tungsten_storage_block_stairs",
        "techreborn:raw_tungsten_storage_block_slab",
        "techreborn:raw_tungsten_storage_block_wall",
        "createbigcannons:molten_bronze_bucket",
        "createbigcannons:molten_steel_bucket",
        "createbigcannons:molten_nethersteel_bucket",
        "createdeco:zinc_sheet"
    ];
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "oak_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "birch_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "spruce_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "jungle_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "acacia_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "dark_oak_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "crimson_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "warped_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "oak_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "birch_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "spruce_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "jungle_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "acacia_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "dark_oak_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "crimson_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "warped_planks", 41);

    const gems = [
        "peridot",
        "red_garnet",
        "ruby",
        "sapphire",
        "yellow_garnet"
    ]
    gems.forEach((gem) => {
        HIDDEN_ITEMS.push(`techreborn:${gem}_ore`);
        HIDDEN_ITEMS.push(`techreborn:deepslate_${gem}_ore`);
        HIDDEN_ITEMS.push(`techreborn:${gem}_storage_block`);
        HIDDEN_ITEMS.push(`techreborn:${gem}_storage_block_stairs`);
        HIDDEN_ITEMS.push(`techreborn:${gem}_storage_block_slab`);
        HIDDEN_ITEMS.push(`techreborn:${gem}_storage_block_wall`);
        HIDDEN_ITEMS.push(`techreborn:${gem}_gem`);
        HIDDEN_ITEMS.push(`techreborn:${gem}_dust`);
        HIDDEN_ITEMS.push(`techreborn:${gem}_small_dust`);
    });

    const ingots = [
        "tungstensteel",
        "chrome",
        "titanium",
        "nickel",
        "refined_iron",
        "aluminum",
        "tungsten",
        "platinum",
        "brass",
        "zinc"
    ]
    ingots.forEach((ingot) => {
        HIDDEN_ITEMS.push(`techreborn:${ingot}_tiny_dust`);
        HIDDEN_ITEMS.push(`techreborn:${ingot}_dust`);
        HIDDEN_ITEMS.push(`techreborn:${ingot}_ingot`);
        HIDDEN_ITEMS.push(`techreborn:${ingot}_nugget`);
        HIDDEN_ITEMS.push(`techreborn:${ingot}_plate`);
        HIDDEN_ITEMS.push(`techreborn:${ingot}_small_dust`);
        HIDDEN_ITEMS.push(`techreborn:${ingot}_storage_block`);
        HIDDEN_ITEMS.push(`techreborn:${ingot}_storage_block_slab`);
        HIDDEN_ITEMS.push(`techreborn:${ingot}_storage_block_stairs`);
        HIDDEN_ITEMS.push(`techreborn:${ingot}_storage_block_wall`);
    });

    // format, dust name, true if used for anything (keep dust, but not tiny dust)
    const dusts = [
        ["almandine", false],
        ["amethyst", true],
        ["andesite", true],
        ["andradite", false],
        ["ashes", true],
        ["basalt", true],
        ["bauxite", false],
        ["bronze", false],
        ["calcite", true],
        ["charcoal", true],
        ["cinnabar", false],
        ["clay", true],
        ["coal", true],
        ["dark_ashes", true],
        ["diamond", true],
        ["diorite", true],
        ["electrum", true],
        ["emerald", false],
        ["ender_eye", false],
        ["ender_pearl", false], // ae2 ender dust replaces it
        ["endstone", false],
        ["flint", true],
        ["galena", true],
        ["granite", true],
        ["grossular", false],
        ["invar", false],
        ["lazurite", true],
        ["magnesium", false],
        ["manganese", false],
        ["marble", false],
        ["netherrack", true],
        ["nickel", false],
        ["obsidian", false], // replaced by create obsidian dust
        ["olivine", true],
        ["phosphorous", false],
        ["pyrite", false],
        ["pyrope", false],
        ["quartz", false],
        ["saltpeter", true],
        ["saw", true],
        ["sodalite", false],
        ["spessartine", false],
        ["sphalerite", false],
        ["steel", true],
        ["sulfur", true],
        ["uvarovite", false],
    ]
    dusts.forEach((dust) => {
        if (!dust[1]){
            HIDDEN_ITEMS.push(`techreborn:${dust[0]}_dust`);
        }
        HIDDEN_ITEMS.push(`techreborn:${dust[0]}_small_dust`);
    });


    const plates = [
        "carbon",
        "coal",
        "copper",
        "emerald",
        "gold",
        "iridium",
        "iridium_alloy",
        "iron",
        "lapis",
        "lazurite",
        "magnalium",
        "obsidian",
        "peridot",
        "quartz",
        "red_garnet",
        "redstone",
        "ruby",
        "sapphire",
        "silicon",
        "yellow_garnet",
    ];
    plates.forEach((id) => HIDDEN_ITEMS.push("techreborn:" + id + "_plate"));


    HIDDEN_ITEMS.forEach((id) => event.hide(id));
});

onEvent("rei.add.items", (event) => {
    event.add(Item.of("ae2:facade", '{item:"minecraft:stone"}'));
    //event.add("tconstruct:crafting_station");
});

onEvent("rei.hide.fluids", (event) => {
    event.hide("createbigcannons:molten_steel");
    event.hide("createbigcannons:molten_bronze");
    event.hide("createbigcannons:molten_nethersteel");
});