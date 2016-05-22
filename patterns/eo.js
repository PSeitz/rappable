// The eo hyphenation patterns
// ask sergio.pokrovskij (ĉe) gmail.com
/*global Hyphenator*/
var lang = {}; module.exports = lang; lang['eo'] = {
    leftmin: 2,
    rightmin: 2,
    specialChars: "ĝĉŭĥĵŝ",
    patterns: {
        2: "a1e1i1o1u1",
        3: "4ŭ1a3aa3ea3ia3oa3ue3ae3ee3ie3oe3uen_f1tg1dg1mg1ng1vi3ai3ei3ii3oi3uis_k1vn1mo3ao3eo3io3oo3up1fp1kp1mp1np1sp1tp1ŝs1bs1cs1fs1gs1ks1ps1rs1ts1vu3au3eu3iu3ou3uŝ1mŝ1nŝ1pŝ1tŝ1v",
        4: "_bl4_br4_dl4_dr4_fl4_fr4_gl4_gn4_gr4_kl4_kn4_kr4_kv4_pl4_pr4_ps4_pt4_sf4_sk4_sl4_sm4_sn4_sp4_st4_sv4_tr4_vr4_ŝl4_ŝm4_ŝn4_ŝp4_ŝr4_ŝt4_ŝv42aj_2an_2as_2fik2jn_2lp_2lt_2nk_2ns_2nt_2oj_2on_2os_2st_2us_4b1c4b1d4b1f4b1g4b1k4b1m4b1n4b1p4b1s4b1t4b1v4b1z4b1ĉ4b1ĝ4b1ĵ4b1ŝ4c1b4c1d4c1f4c1g4c1k4c1l4c1m4c1n4c1p4c1r4c1s4c1t4c1v4c1z4c1ĉ4c1ĝ4c1ĵ4c1ŝ4d1b4d1c4d1f4d1g4d1k4d1l4d1m4d1n4d1p4d1s4d1t4d1v4d1z4d1ĉ4d1ĝ4d1ĵ4d1ŝ4f1b4f1c4f1d4f1g4f1k4f1m4f1n4f1p4f1s4f1v4f1z4f1ĉ4f1ĝ4f1ĵ4f1ŝ4g1b4g1c4g1f4g1k4g1p4g1s4g1t4g1z4g1ĉ4g1ĝ4g1ĵ4g1ŝ4h1ĉ4h1ĝ4h1ĵ4h1ŝ4j1b4j1c4j1d4j1f4j1g4j1k4j1l4j1m4j1n4j1p4j1r4j1s4j1t4j1v4j1z4j1ĉ4j1ĝ4j1ĵ4j1ŝ4k1b4k1c4k1d4k1f4k1g4k1m4k1n4k1p4k1s4k1t4k1z4k1ĉ4k1ĝ4k1ĵ4k1ŝ4l1b4l1c4l1d4l1f4l1g4l1k4l1m4l1n4l1p4l1r4l1t4l1v4l1z4l1ĉ4l1ĝ4l1ĵ4m1b4m1c4m1d4m1f4m1g4m1k4m1l4m1n4m1p4m1r4m1s4m1t4m1v4m1z4m1ĉ4m1ĝ4m1ĵ4m1ŝ4n1b4n1c4n1d4n1f4n1g4n1j4n1k4n1l4n1n4n1p4n1r4n1s4n1t4n1z4n1ĉ4n1ĝ4n1ĵ4n1ŝ4p1b4p1c4p1d4p1g4p1v4p1z4p1ĉ4p1ĝ4p1ĵ4r1b4r1c4r1d4r1f4r1g4r1k4r1l4r1m4r1n4r1p4r1s4r1t4r1v4r1z4r1ĉ4r1ĝ4r1ĵ4r1ŝ4s1d4s1l4s1m4s1n4s1s4s1z4s1ĉ4s1ĝ4s1ĵ4s1ŝ4t1b4t1c4t1d4t1f4t1g4t1k4t1m4t1n4t1p4t1s4t1t4t1v4t1z4t1ĉ4t1ĝ4t1ĵ4t1ŝ4v1b4v1c4v1d4v1f4v1g4v1k4v1l4v1m4v1n4v1p4v1s4v1t4v1v4v1z4v1ĉ4v1ĝ4v1ĵ4v1ŝ4z1b4z1c4z1d4z1f4z1g4z1k4z1l4z1m4z1n4z1p4z1r4z1s4z1t4z1v4z1ĉ4z1ĝ4z1ĵ4z1ŝ4ĉ1b4ĉ1c4ĉ1d4ĉ1f4ĉ1g4ĉ1k4ĉ1l4ĉ1m4ĉ1n4ĉ1p4ĉ1s4ĉ1t4ĉ1v4ĉ1z4ĉ1ĉ4ĉ1ĝ4ĉ1ĵ4ĉ1ŝ4ĝ1b4ĝ1c4ĝ1d4ĝ1f4ĝ1g4ĝ1k4ĝ1l4ĝ1m4ĝ1n4ĝ1p4ĝ1s4ĝ1t4ĝ1v4ĝ1z4ĝ1ĉ4ĝ1ĝ4ĝ1ĵ4ĝ1ŝ4ĥ1b4ĥ1c4ĥ1d4ĥ1f4ĥ1g4ĥ1k4ĥ1m4ĥ1n4ĥ1p4ĥ1s4ĥ1t4ĥ1v4ĥ1z4ĥ1ĉ4ĥ1ĝ4ĥ1ĵ4ĥ1ŝ4ĵ1b4ĵ1c4ĵ1d4ĵ1f4ĵ1g4ĵ1k4ĵ1l4ĵ1m4ĵ1n4ĵ1p4ĵ1s4ĵ1t4ĵ1v4ĵ1z4ĵ1ĉ4ĵ1ĝ4ĵ1ĵ4ĵ1ŝ4ŝ1b4ŝ1c4ŝ1d4ŝ1f4ŝ1g4ŝ1k4ŝ1s4ŝ1z4ŝ1ĉ4ŝ1ĝ4ŝ1ĵ4ŝ1ŝn2kvp1j2",
        5: "_al2t_ba3t_be3j_be3t_bi3d_bi3l_bi3t_bo3t_bu3l_bu3m_ci3t_de3c_di3g_do3t_fi3d_fi3g_fi3l_fo3t_fu3l_fu3m_go3t_gu3m_hu3m_ji3d_jo3t_ju3l_ka3n_ki3l_ko3t_ku3l_le3m_li3d_li3g_li3t_li4a_lo3t_lu3l_lu3m_ma3n_me3t_mi3l_mi3t_mi4a_mo3t_mu3l_ne3t_ni4a_no2v_no3t_nu3l_pa3n_pe3c_pi3g_po2r_po3t_pu3l_pu3m_ra3n_ri3d_ri3g_ri3t_ro3t_ru3l_ru3m_sa2m_sa3n_si3d_si4a_skl4_skr4_skv4_spl4_spr4_str4_su3m_te3m_ti3g_tu3l_va3n_ve3t_vi3d_vi3l_vi3t_vi4a_vo3t_zu3m_ĉi3l_ĉi4a_ĉi4e_ĉi4o_ĉi4u_ĥa3n_ĥe3t_ĵu3l_ŝi4a_ŝo3t_ŝpr4_ŝtr41a2kr1o2be2ajn_2ojn_3nja_3nje_3njo_3ĉ2jo4b1b24b1h44b1j24c1c24c1h44c1j24d1d24d1h44d1j24f1f24f1h44f1j24g1g24g1h44g1j24j1h44k1h44k1j24l1h44l1j24l1l24l1s24l5ŝ24m1h44m1j24m1m24n1h44n1v24p1h44r1h44r1j24s1h44s1j24t1h44t1j24v1h44v1j24z1h44z1j24ĉ1h44ĉ1j24ĝ1h44ĝ1j24ĥ1h44ĥ1j24ĵ1h44ĵ1j24ŝ1h44ŝ1j2kla3rli5anli5asmi5aŭn1s2cn1s2tn2k1cn2s1fz2lotĵ2e3tŭ2s1k",
        6: "_ban3t_bin3d_bru3l_di2s1_din3g_du2m1_ek2s1_el1uz_f2a3r_fin3t_fo2r1_fon3t_gla3t_gru3m_ha3r2_hin3d_hon3t_kan3t_kel2k_kon3t_ku2n1_lin3d_ma2l1_me2m1_me2z1_men3d_mez2o_mi2s1_mon3t_no3bl_pen3d_pin3d_pin3t_pl2ej_plu3m_pon3t_rin3g_ris3m_se2n1_sen3d_sis3m_su2b1_ten3d_tin3t_tru3l_tru3m_tu2t1_ven3d_vi2c1_vi2r1_vin3d_vo3bl_ĉe2f1_ĉie4s_ĉio4m_ĝi2s1_ŝin3d1a2da_1a2de_1a2di_1a2do_1a2du_1a2gra1a2na_1a2ne_1a2ni_1a2no_1a2nu_1a2per1a2ra_1a2re_1a2rig1a2riĝ1a2ro_1a2ta_1a2te_1a2to_1a2ĉa_1a2ĉe_1a2ĉo_1a2ĵa_1a2ĵe_1a2ĵo_1e2ben1e2ca_1e2ce_1e2co_1e2d2z1e2ga_1e2gal1e2ge_1e2gi_1e2go_1e2gu_1e2ja_1e2je_1e2jo_1e2ma_1e2me_1e2mi_1e2mo_1e2mu_1e2ta_1e2te_1e2to_1es2tr1i2da_1i2de_1i2do_1i2ga_1i2gat1i2ge_1i2gi_1i2git1i2go_1i2got1i2gu_1i2la_1i2le_1i2lo_1i2ta_1i2te_1i2to_1i2ĝa_1i2ĝe_1i2ĝi_1i2ĝo_1i2ĝu_1o2kup1o2ta_1o2te_1o2to_1u2ja_1u2je_1u2jo_1u2la_1u2le_1u2lo_1u2ma_1u2me_1u2mi_1u2mo_1u2mu_1ŝ2tel3njaj_3njan_3njoj_3njon_3s2lab3s2lav3s2led3s2lip3s2lup3s2mut3s2nob3s2nuf4b1s2k4ologial3teram2a3re2sperel2a3ner2a3rir2a3nkrom2omi5asmmul2t1mul3tamul3tomult2enaŭo4pof2i3lol2i3tom2a3rsam2arsen2atsen2ilsp2e3cvi5andvir2usvrin3gĉi3el1",
        7: "_ab2a3t_ac2i3d_ag2a3t_ag2i3t_apu2d1_ar2i3d_av2i3d_az2i3l_az2o3t_bl2a3t_br2i3d_br2i3g_br2i3l_br2i3t_br2i3ĝ_ci3s3t_di3s3t_dr2i3l_du2on1_ed2e3m_ed2i3l_eg2i3d_ek1i2r_ek1rid_el1i2r_el2i3t_en1ir2_er2o3t_et2a3t_et2i3l_ev2i3t_fe3b1l_fl2e3g_fl2o3t_fr2a3t_fr2i3d_fr2i3t_fr2o3t_gi3s3t_gl2i3t_gr2i3l_gr2o3t_gv2i3d_hi3s3t_im2i3t_ki3s3t_klin3g_krin3g_kro2m1_kv2i3t_kv2o3t_kvin3t_li3s3t_me3b1l_naŭo4n_ok2u3l_om2e3g_on2a3n_pi3s3t_pl2e3t_pl2o3t_plan3t_po2e3m_po2e3t_pos2t1_pr2e3m_ps2i3l_re2tro_sk2e3m_sk2i3t_sk2o3t_sp2a3t_sp2i3t_sp2o3t_st2a3r_st2i3l_stru3m_svin3g_tr2e3m_tr2o3t_tran2s_trio2n_trio2p_tu3ta__tu3te__tu3to__ul2u3l_ut2i3l_uv2u3l_vi3ca__vi3ce__vi3co__vi3s3t_ĉia4m1_ŝv2i3t1a2daj_1a2dan_1a2das_1a2dis_1a2doj_1a2don_1a2dos_1a2dus_1a2fabl1a2naj_1a2nan_1a2nas_1a2nis_1a2nism1a2noj_1a2non_1a2nos_1a2nus_1a2raj_1a2ran_1a2roj_1a2ron_1a2t1ec1a2taj_1a2tan_1a2toj_1a2ton_1a2va1r1a2ĉaj_1a2ĉan_1a2ĉoj_1a2ĉon_1a2ĵaj_1a2ĵan_1a2ĵoj_1a2ĵon_1an2ta_1an2te_1an2to_1e2bla_1e2ble_1e2bli_1e2blo_1e2blu_1e2caj_1e2can_1e2coj_1e2con_1e2gaj_1e2gan_1e2gas_1e2gis_1e2goj_1e2gon_1e2gos_1e2gus_1e2j1ig1e2j1iĝ1e2jaj_1e2jan_1e2joj_1e2jon_1e2kzem1e2m1ec1e2maj_1e2man_1e2mas_1e2mis_1e2moj_1e2mon_1e2mos_1e2mus_1e2tai_1e2taj_1e2tan_1e2tau_1e2toj_1e2ton_1en2da_1en2de_1en2di_1en2do_1en2du_1i2d1ar1i2daj_1i2dan_1i2dent1i2doj_1i2don_1i2gaj_1i2gan_1i2gant1i2gas_1i2gebl1i2gint1i2gis_1i2goj_1i2gon_1i2gont1i2gos_1i2gus_1i2l1ar1i2laj_1i2lan_1i2loj_1i2lon_1i2t3ec1i2taj_1i2tan_1i2toj_1i2ton_1i2ĝaj_1i2ĝan_1i2ĝant1i2ĝas_1i2ĝint1i2ĝis_1i2ĝoj_1i2ĝon_1i2ĝont1i2ĝos_1i2ĝus_1in2da_1in2de_1in2di_1in2do_1in2du_1in2ga_1in2ge_1in2gig1in2go_1in2ta_1in2te_1in2to_1is2ma_1is2me_1is2mo_1o2bla_1o2ble_1o2blo_1o2taj_1o2tan_1o2toj_1o2ton_1on2ta_1on2te_1on2to_1s2tu1d1u2j1ig1u2j1iĝ1u2jaj_1u2jan_1u2joj_1u2jon_1u2l1ar1u2l3ec1u2l3ej1u2laj_1u2lan_1u2loj_1u2lon_1u2m3ec1u2maj_1u2man_1u2mas_1u2mis_1u2moj_1u2mon_1u2mos_1u2mus_3njajn_3njojn_3s2lang3s2lojd3s2malt3s2mirg4ografia2ĉ2e3tafg2a3nal3tablal3truiarg2a3nark2a3nban2a3nbaz2a3rbil2e3tbiz2a3rboj2a3rbut2a3ncig2a3ncig2a3rdek2a3ndin2a3rdog2a3ndol2a3rdu3ona_du3one_du3ono_duo2pa_duo2pe_duo2po_faz2a3ngit2a3rhum2i3dinf2a3njap2a3nk1s2t2rkol2e3gkor2a3nma3l2icme3m2orme3z2urmet2a3nmi3s2ilmil2i3tmob2i3lmul3te_org2a3nrad2a3rrap2i3drez2i3drig2i3drip2a3rrum2a3nsc2en3dsep3o2pses3o2psim2i3ltal2a3rtat2a3rtir2a3nvi5atikvol2u3mĉik2a3nĵab2o3tŝam2a3n",
        8: "_abs2i3d_akr2i3d_alb2u3m_am2en3d_and2u3j_ang2i3l_ang2u3l_apr2e3c_apr2i3l_aps2i3d_arg2i3l_ask2e3t_asp2i3d_at2en3d_at2in3g_atl2e3t_bab2i3l_bac2i3l_bal2a3d_bal2o3t_baz2i3l_ber2i3l_bet2u3l_bit2u3m_bl4in3d_boh2e3m_bol2e3t_bol2i3d_buĝ2e3t_ced2i3l_civ2i3l_civ2i3t_dav2i3d_deb2a3t_deb2e3t_deb2i3l_deb2i3t_dec2i3d_def2i3l_del2e3g_dem2e3t_dep2o3t_dev2o3t_di3s2a__di3s2e__di3s2ip_dil2e3m_duk2a3t_efr2i3t_ek3s2ci_ek3s2id_ekz2e3m_ekz2i3l_ekz2o3t_el1aĉet_enk2e3t_eps2i3l_erg2o3t_erm2i3t_et2en3d_fac2i3l_fag2o3t_fas2a3d_fo3r2a__fo3r2e__fo3r2en_fo3r2i__fo3r2o__fo3r2u__fr2in3g_fr2on3t_fus2i3l_gav2o3t_gaz2e3t_gor2i3l_har2e3m_hep2a3t_hez2i3t_hum2i3l_inc2i3d_inc2i3t_ins2i3d_ins2u3l_inte2r1_inv2a3d_inv2i3t_jub2i3l_kab2u3l_kad2e3t_kan2a3d_kan2o3t_kap2o3t_kar2a3t_kar2o3t_kin2e3t_koj2o3t_kom2a3t_kom2e3t_kop2u3l_kro3ma__kro3me__kuk2u3m_kul2o3t_kum2u3l_kv2an3t_lib2i3d_lit2o3t_liv2i3d_luc2i3d_luk2u3m_mak2u3l_malno2v_mar2o3t_med2i3t_mer2i3t_met2i3l_mi3s2al_mi3s2ia_mi3s2ie_mi3s2ii_mi3s2io_mi3s2iu_mod2u3l_mol2a3r_mon2a3t_mot2e3t_muc2i3d_mul2a3t_mut2i3l_nav2i3g_neb2u3l_of2en3d_oml2e3t_orb2i3t_osc2i3l_pal2a3t_paĉ2u3l_pil2o3t_pir2a3t_pir2i3t_piv2o3t_pl2en3d_pl2in3t_pol2a3r_pom2a3d_pr2is3m_pup2i3l_rab2a3t_rab2o3t_rak2e3t_reg2u3l_rem2e3t_ren2a3t_res2u3m_ril2a3t_rip2e3t_rob2o3t_ruk2u3l_sab2a3t_sab2o3t_sal2a3t_se3n2aa_se3n2ao_sen2a3t_sep3o2n_ser2u3m_ses3o2n_sim2u3l_sk2is3m_skr2o3t_sol2i3d_son2a3t_son2e3t_sov2e3t_sp2on3t_spl2i3t_spr2i3t_str2i3d_str2i3g_su2d1af_su2d1am_supe2r1_tab2u3l_tib2e3t_tim2i3d_tok2a3t_tom2a3t_tot2e3m_tu3taj__tu3tan__tu3toj__tu3ton__val2i3d_van2i3l_veg2e3t_vel2a3r_vi3c2ia_vi3c2io_vi3caj__vi3can__vi3coj__vi3con__vig2i3l_viz2i3t_zel2o3t_zen2i3t_ĵak2e3t1a2dajn_1a2dojn_1a2n1i2n1a2najn_1a2nojn_1a2rajn_1a2rojn_1a2tajn_1a2tojn_1a2ĉajn_1a2ĉojn_1a2ĵajn_1a2ĵojn_1an2t1ec1an2t1ig1an2t3ar1an2taj_1an2tan_1an2toj_1an2ton_1e2bl1aĵ1e2bl1ec1e2blaj_1e2blan_1e2blas_1e2blis_1e2bloj_1e2blon_1e2blos_1e2blus_1e2cajn_1e2cojn_1e2gajn_1e2gojn_1e2jajn_1e2jojn_1e2m1u2l1e2majn_1e2mojn_1e2taas_1e2tais_1e2tajn_1e2taos_1e2taus_1e2tojn_1en2daj_1en2dan_1en2das_1en2dis_1en2don_1en2dos_1en2dus_1i2d1i2n1i2dajn_1i2dojn_1i2g1a2d1i2g1e2m1i2g1i2l1i2gajn_1i2gojn_1i2lajn_1i2lojn_1i2s2ta_1i2s2te_1i2s2to_1i2tajn_1i2tojn_1i2ĝ1a2d1i2ĝ1e2m1i2ĝajn_1i2ĝojn_1in2d3ec1in2d3ig1in2d3iĝ1in2daj_1in2dan_1in2das_1in2dis_1in2don_1in2dos_1in2dus_1in2gaj_1in2gan_1in2goj_1in2gon_1in2t3ar1in2t3ec1in2t3us1in2taj_1in2tan_1in2toj_1in2ton_1is2maj_1is2man_1is2moj_1is2mon_1o2bl1ec1o2blaj_1o2blan_1o2bloj_1o2blon_1o2tajn_1o2tojn_1on2taj_1on2tan_1on2toj_1on2ton_1u2jajn_1u2jojn_1u2lajn_1u2lojn_1u2majn_1u2mojn_2u3l2ard2u3l2ari3s2lalom3s2lovak3s2loven3s2milakabut2i3lacet2i3lal3t2a3ralop2a3talum2e3tamul2e3tarom2a3tbarb2a3rbojk2o3tbrev2e3tbulg2a3rdiab2e3tdiad2e3mdom2in3gdorl2o3tdu3onaj_du3onan_du3onoj_du3onon_duo2paj_duo2pan_duo2poj_duo2pon_e3m2u3lsek4s3citek4s3cizembl2e3mepit2e3tfanf2a3rfont2a3nform2u3lfrig2i3dgalv2a3ngarg2a3rgerm2a3nhibr2i3dhipn2o3thisp2a3nhung2a3rizob2a3rkalk2a3nkalk2u3lkank2a3nkaps2u3lkard2a3nkloz2e3tkoag2u3lkomp2a3rkons2u3mkors2e3tkorv2e3tkotl2e3tku3n2iklkvar3o2pkvin3o2plikv2i3dmagn2e3tmalno3blmalpl2ejmarm2o3tmen2in3gmom2an3tmorb2i3dmul2t3egnajb4a1rnark2o3tnaŭt2i3lnirv2a3nnor2d1afnor2d1amnor2d1aznor2d1eŭopos2u3mpalp2i3tparf2u3mparg2e3tperf2i3dpfen2i3gprep2a3rprim2a3rprof2a3nprof2i3tremp2a3rsekr2e3tsist2e3mskal2a3rskel2e3tsopr2a3nspag2e3tspeg2u3lspin2e3tstaf2e3tstef2a3nstr2in3gsubt2i3lsult2a3nsvah2i3ltal2an3ttran3sittual2e3tturb2a3nturb2u3lvinj2e3tvol2on3tvulg2a3rvulk2a3nĉamp2a3nĉinĉ2i3lĥlam2i3dŝevj2o3tŝil2in3g",
        9: "_abs2in3t_akum2u3l_akur2a3t_alpr2e3m_anat2e3m_apar2a3t_apet2i3t_ar2i3s3t_atl2an3t_avok2a3d_band2i3t_bi3g2o3t_bisk2o3t_braz2i3l_brok2a3t_ci3d2a3r_dakt2i3l_def2en3d_desp2o3t_di3g2i3t_di3s2aj__di3s2an__di3s2en__di3s2ert_di3s2erv_di3s2oci_dist2i3l_ejak2u3l_ekpr2e3m_eksc2i3t_ekste2r1_ektr2e3m_emer2i3t_erud2i3t_est2in3g_eŭkl2i3d_fakt2o3t_far2in3g_fist2u3l_flor2i3d_fo3r2aj__fo3r2an__fo3r2as__fo3r2is__fo3r2oj__fo3r2on__fo3r2os__fo3r2u3m_fo3r2us__form2e3t_gal2an3t_gamb2i3t_gefr2a3t_gig2an3t_golg2o3t_graf2i3t_gran2a3t_gran2i3t_gran2u3l_grat2u3l_grav2i3t_har2in3g_herk2u3l_herm2e3t_in3d2i3g_in3d2ign_inok2u3l_inst2i3g_inte3ra__inte3re__inte3ri__inte3ro__inte3ru__intr2i3g_jac2in3t_ka3n2i3n_kal2en3d_kaml2o3t_klim2a3t_komp2a3t_komp2i3l_komp2o3t_konf2e3t_konf2i3d_konf2i3t_kons2i3l_kons2u3l_kost2u3m_kr2i3s3t_krav2a3t_kred2i3t_krik2e3t_kro3maj__kro3man__krok2e3t_kval2i3t_kvar3o2n_kvin3o2n_kviv2i3t_kvor2u3m_lar2in3g_madr2i3d_magn2a3t_mals2a3t_mand2a3t_mant2i3l_mark2o3t_marm2i3t_me3z2ere_mer2in3g_mioz2o3t_mit2in3g_mosk2i3t_musk2a3t_negl2i3ĝ_neof2i3t_norv2e3g_ok3o2na__ok3o2ne__ok3o2no__ok3o2pa__ok3o2pe__ok3o2po__okt2an3t_opid2u3m_ped2an3t_pier2o3t_prel2a3t_prel2e3g_prete2r1_prez2i3d_prim2a3t_priv2a3t_prod2i3g_prof2e3t_prol2e3t_pud2in3g_pust2u3l_rak2on3t_re2spond_rem2on3t_rodr2i3g_sa3m2u3m_sir2in3g_sk2i3s3t_sold2a3t_spek2u3l_spir2i3t_stab2i3l_stil2e3t_stil2i3t_stim2u3l_su2d1azi_su2d1eŭr_su2d1rus_su3b2i3t_su3b2ute_supe3ra__supe3re__supe3ri__supe3ro__supe3ru__ta3n2i3n_tand2e3m_teor2e3m_term2i3t_trik2o3t_tu3tajn__tu3tojn__vend2e3t_vert2i3ĝ_vest2i3ĝ_vi3cajn__vi3cojn__vik2in3g_vist2u3l_vulg2a3t_ĝent2i3l1an2tajn_1an2tojn_1e2blajn_1e2blojn_1en2dajn_1i2s2m3ec1i2s2t3ar1i2s2t3ec1i2s2taj_1i2s2tan_1i2s2toj_1i2s2ton_1in2dajn_1in2gajn_1in2gojn_1in2tajn_1in2tojn_1is2majn_1is2mojn_1o2blajn_1o2blojn_1on2tajn_1on2tojn_3s2lofoks3s2meraldabrik2o3tadiab2a3tadvok2a3tafrik2a3tagreg2a3takomp2a3nakred2i3takrob2a3talfab2e3tan3t2arktanekd2o3tantid2o3taor2i3s3tapost2a3taŭtom2a3tbajon2e3tbankr2o3tbiskv2i3tblasf2e3mdefic2i3tdek3o2na_dek3o2ne_dek3o2no_dek3o2pa_dek3o2pe_dek3o2po_delik2a3tdinam2i3tdisk2an3tdisk2on3tdu3onajn_du3onojn_dump2in3gduo2pajn_duo2pojn_ekstr2e3mekz2i3s3telef2an3temfiz2e3mfre2m2d3lgalin2u3lgenoc2i3dgren2o3blhiac2in3tin3d2iĝeninf2a4n3tinfin2i3tins2i3s3tinst2an3tinval2i3dkabin2e3tkalik2o3tkamar2a3dkamom2i3lkapac2i3tkapit2a3nkapit2u3lkarav2a3nklarn2e3tkoinc2i3dkompl2e3tkompl2o3tkreoz2o3tkro3m2a3tkulin2a3rlimon2a3dmalak2i3tmalgl2a3tmanip2u3lmegal2i3tmembr2a3nmil3o2na_mil3o2ne_mil3o2no_mil3o2pa_mil3o2pe_mil3o2po_molek2u3lmul4t3oblnor2d1rusokcip2i3tordin2a3rordin2a3tp2i3t4ecipamfl2e3tpaskv2i3lpelik2a3npersv2a3dpiram2i3dpos3t2u3lpret2en3dretik2u3lsa3m2urajsalp2in3gsanit2a3rsen2eskalseren2a3dsibar2i3tskrup2u3lstenc2i3lstigm2a3tstrob2i3lsurog2a3tteher2a3ntelev2i3dtran3septvatik2a3nveter2a3nvodev2i3lvolat2i3lĉokol2a3dŝibol2e3t",
        10: "_adekv2a3t_alikv2o3t_arog2an3t_askar2i3d_bal2i3s3t_bat2i3s3t_behem2o3t_brok2an3t_cenob2i3t_cirkv2i3t_di3s2ajn__diam2an3t_dist2in3g_domic2i3l_ekste3ra__ekste3re__ekste3ri__ekste3ro__ekste3ru__fo3r2ajn__fo3r2in3t_fo3r2ojn__gen2i3s3t_halel2u3j_herod2o3t_inte3r2es_inte3r2ez_inte3raj__inte3ran__inte3ras__inte3ren__inte3ris__inte3roj__inte3ron__inte3ros__inte3rus__kamar2i3l_kazem2a3t_kaĉal2o3t_komit2a3t_konst2a3t_kro3majn__kvadr2a3t_kvadr2i3g_mecen2a3t_ok3o2naj__ok3o2nan__ok3o2noj__ok3o2non__ok3o2paj__ok3o2pan__ok3o2poj__ok3o2pon__paraz2i3t_prest2i3ĝ_probl2e3m_re2f3l2ig_renk2on3t_rez2i3s3t_satel2i3t_skarl2a3t_skler2o3t_stern2u3m_strat2e3g_supe3raj__supe3ran__supe3ras__supe3ris__supe3roj__supe3ron__supe3ros__supe3rus__terak2o3t_trans2i3t_ultim2a3t1i2s2tajn_1i2s2tojn_1o2por1tun1u2l1i2na_1u2l1i2ne_1u2l1i2no_3s2log2a3nadjut2an3tantrac2i3tasimil3i4tasimpt2o3tb2i3l2a3rdbatal3an4tbergam2o3tbr2i3g2a3dbracel2e3tcent3o2na_cent3o2ne_cent3o2no_cent3o2pa_cent3o2pe_cent3o2po_dek3o2naj_dek3o2nan_dek3o2noj_dek3o2non_dek3o2paj_dek3o2pan_dek3o2poj_dek3o2pon_dilet2an3tdiplom2a3telizab2e3tf2i3l2a3rbf2i3l2a3rifakult2a3tfokstr2o3tformul2a3rhierod2u3lhipokr2i3thomunk2u3lhoriz2on3thotent2o3tinkogn2i3tins2ul2i3ninterm2i3tinvent2a3rkalend2a3rkalend2u3lkan3t2arelkandid2a3tkonfr2on3tkons2i3s3tkonst2an3tkresĉ2en3dkrizal2i3dkrokod2i3lkvadr2an3tlabir2in3tmarcip2a3nmarion2e3tmatrik2u3lme3z2embrime3z2entermez2aliancmil3o2naj_mil3o2nan_mil3o2noj_mil3o2non_mil3o2paj_mil3o2pan_mil3o2poj_mil3o2pon_nor2d1germpartik2u3lpartiz2a3nperlam2o3tpers2i3s3tpoligl2o3tporcel2a3nprecip2i3tpreter2i3tprozel2i3treding2o3trekom2en3drozal4in3dsacerd2o3tsanskr2i3tsek2u3l2arsekund2a3rsindik2a3tsterl2in3gsubstr2a3tsufrag2a3ntamar4in3dtarant2u3ltereb2in3ttran3s2pirtran3scendtrankv2i3ltuberk2u3lvi1r2ulentĉambel2a3nĉarlat2a3n",
        11: "_amet2i3s3t_ekste3raj__ekste3ran__ekste3ras__ekste3ris__ekste3roj__ekste3ron__ekste3ros__ekste3rus__inte3r2upt_inte3rajn__inte3rojn__liverp2u3l_margar2i3t_melol2on3t_ok3o2najn__ok3o2nojn__ok3o2pajn__ok3o2pojn__pir2i3d2in_re2spublik_re2storaci_rekviz2i3t_supe3rajn__supe3rojn_1an2t1i2na_1an2t1i2ne_1an2t1i2no_1u2l1i2naj_1u2l1i2nan_1u2l1i2noj_1u2l1i2non_3s2mok2in3ga4n3t2i3nomaŭtorit2a3tcent3o2naj_cent3o2nan_cent3o2noj_cent3o2non_cent3o2paj_cent3o2pan_cent3o2poj_cent3o2pon_cirkumc2i3dd2is3t2ingodek3o2najn_dek3o2nojn_dek3o2pajn_dek3o2pojn_eksplic2i3tjerusal2e3mjug2u3l2a3rkap2i3l2a3rkastanj2e3tkomprom2i3tkonkord2a3tkonson2an3tkorpusk2u3lkrizant2e3mkvatern2a3rkvodlib2e3tlap2i3d2a3rleŭten2an3tmagistr2a3tmajorit2a3tmastod2on3tmil3o2najn_mil3o2nojn_mil3o2pajn_mil3o2pojn_minorit2a3tpl2i3l2a3rĝplebisc2i3tpop2u3l2a3rpos3t2amentpos3t2iljonpriorit2a3trehabil2i3tsa3m2ov2a3rsing2u3l2arsol2i3d2a3rsomnamb2u3lstalagm2i3tstalakt2i3ttran3sistortroglod2i3tĝentlem2a3n",
        12: "_ekste3rajn__ekste3rojn__instanb2u3l_k2a4n3t2i3n1an2t1i2naj_1an2t1i2nan_1an2t1i2noj_1an2t1i2non_1e2le1g2an3t1e2str1i2na_1e2str1i2ne_1e2str1i2no_1i2s2t1i2na_1i2s2t1i2ne_1i2s2t1i2no_1u2l1i2najn_1u2l1i2nojn_al2i3g2a3torantikr2i3s3tcent3o2najn_cent3o2nojn_cent3o2pajn_cent3o2pojn_kan3t2ar2i3dl2i3g2a3turoreferend2u3msafr2a3n2i3n",
        13: "_pedik2u3l2ar1an2t1i2najn_1an2t1i2nojn_1e2str1i2naj_1e2str1i2nan_1e2str1i2noj_1e2str1i2non_1i2s2t1i2naj_1i2s2t1i2nan_1i2s2t1i2noj_1i2s2t1i2non_dakt2i3l2a3rbfrit2i3l2a3rigal2a4n3t2i3nhermafrod2i3tpterodakt2i3luniversit2a3t",
        14: "1e2str1i2najn_1e2str1i2nojn_1i2s2t1i2najn_1i2s2t1i2nojn_adam2a4n3t2i3nbrig2a4n3t2i3npartik2u3l2a3r",
        15: "prestid2i3g2i3tstrof2a4n3t2i3n"
    },
    patternChars: "_abcdefghijklmnoprstuvzĉĝĥĵŝŭ",
    patternArrayLength: 95106,
    valueStoreLength: 11745
};
