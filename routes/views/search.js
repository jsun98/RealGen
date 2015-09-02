//keystone
var keystone = require('keystone');
var MLS = keystone.list('MLS');

//swig
var swig  = require('swig');
var fs  = require('fs');
var cheerio = require('cheerio');
	fs		= require('fs');
	
//zip
var JSZip = require("jszip");

//mkdir
var mkdirp = require('mkdirp');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.formData = req.body || {};
	locals.pass;
	
	//generates html and zip file
	//i is the number of blank templates
	function generate (cur_template) {
	
		
		
		var base_dir = 'public/blank_templates';
				
		//create new directory
		mkdirp('public/generated/'+req.body.MLS, function(err) { });
	
		//house properties
		var house_properties = JSON.parse('{"d":{"__type":"CompactDataSet:#SDS.REModel.DataContracts","tables":[{"__type":"CompactDataTable:#SDS.REModel.DataContracts","columnDisplayNames":[],"columnNames":["a_c","acres","ad_text","add_chg_dt","addl_mo_fee","addl_pix_url","addr","agent_id","all_inc","alt_feature_sheet","amps","app_req","appts","apt_num","area","area_code","area_infl_srch","area_infl1","area_infl1_out","area_infl2","area_infl2_out","arn","ass_year","bath_tot","bay_size1","bay_size1_in","bay_size2","bay_size2_in","bldg_amen_srch","bldg_amen1_out","bldg_amen2_out","bldg_amen3_out","bldg_amen4_out","bldg_amen5_out","bldg_amen6_out","bldg_name","board","bph_num","br","br_fax_num","br_plus","br_total","branch","brokr_load","bsmt_srch","bsmt1","bsmt1_out","bsmt2","bsmt2_out","bus_type","cable","cac_inc","cctd","cd","ceil_ht","ceil_ht_in","central_vac","cert_lvl","chattels","city_water","class","cldt","cndsold_xd","co_lagt_id","co_lagt_ph","co_list","code","code_treb","com_chgs","com_cn_fee","com_coopb","comel_inc","comments","community","community_code","comp_pts","cond","cond_txinc","condo_corp","condo_exp","constr_srch","constr1","constr1_out","constr2","constr2_out","contac_exp","coop_s1mem","coop_s2","coop_s2mem","corp_num","country","county","crane","credit_chk","cross_st","days_open","dba","den_fr","depth","dir1","disc_td","disp_addr","dom","dont_disc","drive","dt_sus","dt_ter","dup_ml","elec","elevator","employees","emply_lett","energy_cert","ens_lndry","esc_clause","esc_flag","exer_gym","exp_actest","extras","farm_agri","fin_stmnt","fpl_num","franchise","freestandg","front_ft","fuel","furnished","gar","gar_spaces","gar_type","gas","green_pis","gross_inc","handi_equipped","heat_exp","heat_inc","heating","holdover","hours_open","hydro_exp","hydro_inc","img_refnum","inc_list","inc_sale","ind_area","ind_areacd","input_date","insur","insur_bldg","internet","inventory","irreg","kit_plus","kit_total","lagt_ph","latitude","laundry","laundry_lev","lcdt","ld","lease","lease_term","legal_desc","level1","level10","level11","level12","level2","level3","level4","level5","level6","level7","level8","level9","list_agent","llbo","locker","locker_num","longitude","lot_code","lot_fr_inc","lot_u_prt","lotsz_code","lp_code","lp_dol","lsc","lse_terms","lud","maint","map_col","map_loc_url","map_page","map_row","mgmt","minrenttrm","ml_num","mmap_col","mmap_page","mmap_row","mort_amt","mort_comm","mort_freq","mort_inc","mort_ir","mort_lendr","mort_mdt","mort_pay","municipality","municipality_code","municipality_district","net_inc","num_kit","oa_area","occ","occupancy","oenc","oenc_freq","oenc_inc","oenc_ir","oenc_lendr","oenc_mdt","oenc_pay","oenc_type","off_areacd","oh_date","oh_fr_time","oh_notes","oh_to_time","onlineApptUrl","oper_exp","opt_to_buy","orig_dol","orig_lp_cd","oth_struc_srch","oth_struc1","oth_struc1_out","oth_struc2","oth_struc2_out","other","out_storg","outof_area","owner","parcel_id","park_chgs","park_desig","park_desig_2","park_fac","park_lgl_desc1","park_lgl_desc2","park_spc1","park_spc2","park_spcs","parking_spots","patio_ter","pay_freq","pay_meth","pctd","perc_bldg","perc_dif","perc_rent","perm_adv","pets","pip_num","pix","pix_code","pix_img","pix_refnum","pix_treb","pix_ts","pool","ppcode","pr_lp_dol","pr_lsc","prkg_inc","prop_feat_srch","prop_feat1","prop_feat1_out","prop_feat2","prop_feat2_out","prop_feat3","prop_feat3_out","prop_feat4","prop_feat4_out","prop_feat5","prop_feat5_out","prop_feat6","prop_feat6_out","prop_mgmt","prop_type","pvt_ent","rail","rec_room","redt","ref_req","remarks","retail_a","retail_ac","retirement","rltr","rltr_municipality","rltr_st","rltr_zip","rm_dc_srch","rm_srch","rm1","rm1_dc1_out","rm1_dc2_out","rm1_dc3_out","rm1_len","rm1_out","rm1_wth","rm10_dc1_out","rm10_dc2_out","rm10_dc3_out","rm10_len","rm10_out","rm10_wth","rm11_dc1_out","rm11_dc2_out","rm11_dc3_out","rm11_len","rm11_out","rm11_wth","rm12_dc1_out","rm12_dc2_out","rm12_dc3_out","rm12_len","rm12_out","rm12_wth","rm2","rm2_dc1_out","rm2_dc2_out","rm2_dc3_out","rm2_len","rm2_out","rm2_wth","rm3","rm3_dc1_out","rm3_dc2_out","rm3_dc3_out","rm3_len","rm3_out","rm3_wth","rm4","rm4_dc1_out","rm4_dc2_out","rm4_dc3_out","rm4_len","rm4_out","rm4_wth","rm5","rm5_dc1_out","rm5_dc2_out","rm5_dc3_out","rm5_len","rm5_out","rm5_wth","rm6","rm6_dc1_out","rm6_dc2_out","rm6_dc3_out","rm6_len","rm6_out","rm6_wth","rm7","rm7_dc1_out","rm7_dc2_out","rm7_dc3_out","rm7_len","rm7_out","rm7_wth","rm8","rm8_dc1_out","rm8_dc2_out","rm8_dc3_out","rm8_len","rm8_out","rm8_wth","rm9","rm9_dc1_out","rm9_dc2_out","rm9_dc3_out","rm9_len","rm9_out","rm9_wth","rms","rooms_plus","rr","rr_dt","rr_edt","s_areacd","s_r","sales_brochure_url","sauna","sb_branch","sb_code","sbcd_treb","scdt","seats","sec","sec_dep","secgrd_sys","sell_agt","sewer","share_perc","shpdrsdlhtft","shpdrsdlhtin","shpdrsdlnu","shpdrsdlwdft","shpdrsdlwdin","shpdrsdmhtft","shpdrsdmhtin","shpdrsdmnu","shpdrsdmwdft","shpdrsdmwdin","shpdrsglhtft","shpdrsglhtin","shpdrsglnu","shpdrsglwdft","shpdrsglwdin","shpdrstlhtft","shpdrstlhtin","shpdrstlnu","shpdrstlwdft","shpdrstlwdin","sld_chg","sld_chg_dt","soil_test","sold_area","sound_bite_url","sp_code","sp_code_hold","sp_dol","spec_des","spec_des_srch","spec_des1_out","spec_des2_out","spec_des3_out","spec_des4_out","spec_des5_out","spec_des6_out","sprinklers","sqft","sqft_source","sqs_rac_ct","srchst_num","srltr","st","st_dir","st_num","st_sfx","staff_comm","statisuse","status","status_aur","status_cert","status_geo","stories","style","survey","susdt","taxes","taxes_exp","td","tennis_ct","terms","timestamp","timestamp_sql","tot_area","tot_areacd","tot_exp","touchbaseEnabled","tour_flag","tour_url","town","township","trlr_pk_spt","tv","type_own_srch","type_own1","type_own1_out","type_own2","type_own2_out","type_taxes","uctd","uffi","unavail_dt","unit_num","util_cable","util_sewr","util_tel","utilities","vac_perc","vend_pis","volts","vtour_upby","vtour_updt","water","water_exp","water_inc","waterfront","wcloset_p1","wcloset_p2","wcloset_p3","wcloset_p4","wcloset_p5","wcloset_t1","wcloset_t1lvl","wcloset_t2","wcloset_t2lvl","wcloset_t3","wcloset_t3lvl","wcloset_t4","wcloset_t4lvl","wcloset_t5","wcloset_t5lvl","wrtd","wtr_suptyp","xd","xdtd","yr","yr_built","yr_exp","yr1_lsd_price","yr1_lsd_price_hold","yr2_lsd_price","yr2_lsd_price_hold","yr3_lsd_price","yr3_lsd_price_hold","yr4_lsd_price","yr4_lsd_price_hold","yr5_lsd_price","yr5_lsd_price_hold","zip","zn","zn_district","zoning","calculatedPermission.create","calculatedPermission.read","calculatedPermission.update","calculatedPermission.delete"],"count":1,"entityKey":{"__type":"EntityKey:#SDS.REModel.DataContracts","appName":"TREB","entityName":"Listing","metadataName":"TREB"},"fullCount":null,"index":null,"orderBy":null,"overflow":false,"rows":[["Central Air",null,"Exquisite Custom Built Home On Spectacular 2.95 Acre Lot. Approx 11000Sf Of Ultimate Luxury, Intricate Mouldings, Exceptional Millwork\/Framing Thru\/Out.  Opulent Marble Foyer, Hand Painted By Revered Artist, Dramatic Wrought Iron Gated Entry W\/Imported Water Feature. Resort Like Backyard W\/I\/G Pool, Cabana, B\/I Kitchen With Bbq, Pizza Oven, Fireplace & More. Master Wing Approx 2500 Sq Ft W\/Sitting Rm & W\/O To Balcony With Hot Tub","\/Date(1436760000000-0400)\/",null,null,"165 Greenbrooke Dr","2524137",null,null,null,null,null,null,"York","09",null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,"TREB","416-441-2888",5,"416-441-9926",null,5,"00","Y","F.","F","Finished",null,null,null,null,null,null,null,null,null,null,null,null,null,"Free",null,null,"3429019","416-441-2888","RICK VILLANI, Broker","3035",null,null,null,"2.5% + H.S.T.",null,null,"Vellore Village","09.02.0080","S",null,null,null,null,"S.","S","Stone",null,null,"N",null,null,null,null,"Canada","Ontario",null,null,"Weston & Teston",null,null,"Y",0.00,null,null,"Y",36,null,"Private",null,null,"N",null,null,null,null,null,null,null,"",null,null,"Custom W\/I Closet And 2 Ensuites Fit For Royalty. Each Additional Bdrm With Its Own Den And Ensuite On 2nd Fl, Plus An Oversized 2nd Theatre Rm.  All App, All Elfs, Chandeliers, All Wdw Coverings, Professional State Of The Art Theatre Rm.",null,null,"Y",null,null,238.35,"Gas",null,null,7.0,"Attached",null,null,null,null,null,null,"Forced Air",120,null,null,null,null,null,null,null,null,"\/Date(1436760000000-0400)\/",null,null,"Y",null,"2.95 Acres",null,2,"416-441-2888",43.8557,null,null,null,"\/Date(1436760000000-0400)\/",null,null,"Plan 65M2192 Pt Blk 21 Rs65R18622 Part 6","Main","2nd","2nd","2nd","Main","Main","Main","Main","Main","Main","Main","Main","MICHELLE ANNE SCHIPPER, Broker",null,null,null,-79.56801,null,null,null,"Feet",null,8880000.00,"New",null,"\/Date(1438660800000-0400)\/",null,null,null,null,null,null,null,"N3259591",11,348,"Q",null,"Harvey Kalles Real Estate Ltd., Brokerage Requires Deposit Herewith. Min 10% Deposit With Cert Chq Or Bd W\/Offer.",null,null,null,null,null,null,"Vaughan","09.02","Vaughan",null,2,null,"90 Days\/Tba","Owner",null,null,null,null,null,null,null,null,null,null,null,null,null,"http:\/\/office.harveykalles.com:81\/",null,null,8880000.00,null,null,null,null,null,null,null,null,"","Joey Furfari",null,null,null,null,null,null,null,null,null,20,null,null,null,null,null,null,null,null,"Y",null,null,"Y",null,null,null,null,"20150713.103303","Inground",null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"Pls Attach Sch B To All Offers. 48Hr Notice For All Shwgs. La To Attend. Sellers Request Only Very Qualified Buyers. Close To City & Highways. Speak To La For List Of Inclusions, Too Many To Mention. 1st Time Offered For Sale.",null,null,null,"HARVEY KALLES REAL ESTATE LTD., BROKERAGE","Toronto","2145 Avenue Road","M5M4B2",null,".Lr.Dr.Sit.Kit.Bkr.Fam.Sit.M\/E.Den.Mbr.Sit.Oth",null,"Formal Rm","Hardwood Floor","Gas Fireplace",4.85,"Living",3.90,"Hardwood Floor","W\/O To Balcony",null,7.65,"Master",4.55,"Hardwood Floor","Gas Fireplace","Crown Moulding",7.70,"Sitting",7.65,"Hardwood Floor","Crown Moulding","Window",10.20,"Other",2.70,null,"Formal Rm","Hardwood Floor","Crown Moulding",5.65,"Dining",4.00,null,"Marble Floor","Crown Moulding","Formal Rm",4.10,"Sitting",2.95,null,"Marble Floor","B\/I Appliances","Centre Island",5.55,"Kitchen",5.30,null,"Marble Floor","Gas Fireplace","W\/O To Patio",7.00,"Breakfast",3.90,null,"Hardwood Floor","Gas Fireplace","Crown Moulding",6.10,"Family",4.50,null,"Marble Floor","W\/O To Pool","Marble Floor",7.50,"Sitting",4.50,null,"Broadloom","",null,8.80,"Media\/Ent",4.00,null,"Hardwood Floor","Gas Fireplace","B\/I Shelves",4.45,"Den",3.45,15,1,null,null,null,null,"Sale",null,null,null,null,null,null,null,null,null,null,null,"Septic",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"","",null,null,"N.","Unknown",null,null,null,null,null,null,null,null,null,165,null,"Greenbrooke",null,"165","Dr",null,null,"A","A",null,"MATCHED",null,"2-Storey",null,null,29680.50,null,null,null,null,"20150804.184351","\/Date(1438728231000-0400)\/",null,null,null,"N",null,"http:\/\/imaginahome.com\/WL\/Main.aspx?id=185663904",null,null,null,null,"D.","D","Detached",null,null,null,null,null,null,null,null,null,null,null,null,"N",null,null,null,"Well",null,null,null,2,2,8,3,3,1,"Main",1,"2nd",1,"2nd",4,"2nd",1,null,null,null,"\/Date(1467518400000-0400)\/",null,2014,null,null,null,null,null,null,null,null,null,null,null,null,"L4L 8L1","N08",null,"Res",0,0,1,1]]}]}}');
		var names = house_properties.d.tables[0].columnNames;
		var info = house_properties.d.tables[0].rows[0];
		
		
		//pictures
		var pics = [{pics1:"http://www.independent.co.uk/incoming/article8465213.ece/alternates/w620/v2-cute-cat-picture.jpg", 
			pics2:"http://i.kinja-img.com/gawker-media/image/upload/s--636vKZQq--/c_fit,fl_progressive,q_80,w_636/oqcnwo41iea3wgaa8cfb.jpg",
			pics3:"http://cdn.playbuzz.com/cdn/20b7c734-ef8e-438c-8d02-8353fbfd06cb/40bd6a7e-2809-4008-82da-d3c68a07f1ae.jpg",
			pics4:"http://i.telegraph.co.uk/multimedia/archive/02690/Anne-Guichard_2690182k.jpg", 
			pics5:"http://coolwildlife.com/wp-content/uploads/galleries/post-1593/Brown%20Bear%20Picture%20001.jpg",
			pics6:"http://i.telegraph.co.uk/multimedia/archive/02465/arpita_patra_2465947k.jpg",
			pics7:"http://globe-views.com/dcim/dreams/face/face-02.jpg",
			pics8:"http://myoms.org/assets/images/woman-face-mobile.png"}];	

		var assoc = [];
		for(var i=0; i<names.length; i++) {
			assoc[names[i]] = info[i];
		}
		
		var house_properties_combined = {
			assoc:assoc,
			pics:pics
		};
	
		var blank_template_path = base_dir + '/blank_template' + cur_template + '.html';
		swig.renderFile(blank_template_path, house_properties_combined, function(err, output) {
			if (err) throw err;
			fs.readFile(base_dir + '/website' + cur_template + '.zip', function(err, data) {
				  if (err) throw err;
				  var zip = new JSZip(data);
				  zip.file('/website'+cur_template+'/web.html',output);
				  var generatedFile = zip.generate({type:"nodebuffer"});
				  fs.writeFile('public/generated/'+req.body.MLS+'/website'+cur_template+'.zip', generatedFile, function(err) {
					if (err) throw err;
				  });
			});
		});
	}
	
	// On POST requests
	view.on('post', function(next) {
		function DBValidationError(input) {
			//..check if MLS# exists
			return false;
		}
		
		function inputError(input){
			if (input.length == 0) {
				return true;
			}
		}
		
		function errorCheck() {
			var pass;
			if (inputError(req.body.MLS)) {
				pass = false;
			} else if (DBValidationError(req.body.MLS)) { 
				pass = false;
			} else {
				pass = true;			
			}
			return pass;
		}
		
		if (errorCheck()) {
			var TEMPLATE_NUMBER = 4; 
			locals.pass = true;
			for (var i = 1; i < TEMPLATE_NUMBER+1; i++) {
				generate (i);
			}
			//add to database
			var newMLSEntry = new MLS.model(),
				updater = newMLSEntry.getUpdateHandler(req);
		
			updater.process(req.body, {
				flashErrors: false,
				fields: 'MLS'
			}, function(err) {
				if (err) throw err;
				res.redirect('selection');
			});
			

		} else {
			locals.pass = false;
			next();
		}
				
		/*
		var newEnquiry = new MLS.model(),
			updater = newEnquiry.getUpdateHandler(req);
		updater.process(req.body, {
			flashErrors: true,
			fields: 'MLS',
			errorMessage: 'There was a problem submitting your MLS number:'
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				generate(property,blank_template_path);

				locals.enquirySubmitted = true;
			}
			next();
		});
		*/
	});
	
	// Render the view
	view.render('search');
	
};

  




	




