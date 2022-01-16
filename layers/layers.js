var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 台中行政區'
            });
var format_2500_2 = new ol.format.GeoJSON();
var features_2500_2 = format_2500_2.readFeatures(json_2500_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2500_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2500_2.addFeatures(features_2500_2);
var lyr_2500_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2500_2, 
                style: style_2500_2,
                interactive: true,
    title: '火車站周圍2500人口圖<br />\
    <img src="styles/legend/2500_2_0.png" /> 1<br />\
    <img src="styles/legend/2500_2_1.png" /> 2<br />\
    <img src="styles/legend/2500_2_2.png" /> 4<br />\
    <img src="styles/legend/2500_2_3.png" /> 5<br />\
    <img src="styles/legend/2500_2_4.png" /> 6<br />\
    <img src="styles/legend/2500_2_5.png" /> 7<br />\
    <img src="styles/legend/2500_2_6.png" /> 8<br />\
    <img src="styles/legend/2500_2_7.png" /> 9<br />\
    <img src="styles/legend/2500_2_8.png" /> 10<br />\
    <img src="styles/legend/2500_2_9.png" /> 11<br />\
    <img src="styles/legend/2500_2_10.png" /> 17<br />\
    <img src="styles/legend/2500_2_11.png" /> 18<br />\
    <img src="styles/legend/2500_2_12.png" /> 19<br />\
    <img src="styles/legend/2500_2_13.png" /> 23<br />\
    <img src="styles/legend/2500_2_14.png" /> 27<br />\
    <img src="styles/legend/2500_2_15.png" /> 30<br />\
    <img src="styles/legend/2500_2_16.png" /> 36<br />\
    <img src="styles/legend/2500_2_17.png" /> 44<br />\
    <img src="styles/legend/2500_2_18.png" /> 46<br />\
    <img src="styles/legend/2500_2_19.png" /> 48<br />\
    <img src="styles/legend/2500_2_20.png" /> 49<br />\
    <img src="styles/legend/2500_2_21.png" /> 50<br />\
    <img src="styles/legend/2500_2_22.png" /> 52<br />\
    <img src="styles/legend/2500_2_23.png" /> 54<br />\
    <img src="styles/legend/2500_2_24.png" /> 55<br />\
    <img src="styles/legend/2500_2_25.png" /> 56<br />\
    <img src="styles/legend/2500_2_26.png" /> 59<br />\
    <img src="styles/legend/2500_2_27.png" /> 60<br />\
    <img src="styles/legend/2500_2_28.png" /> 61<br />\
    <img src="styles/legend/2500_2_29.png" /> 62<br />\
    <img src="styles/legend/2500_2_30.png" /> 64<br />\
    <img src="styles/legend/2500_2_31.png" /> 66<br />\
    <img src="styles/legend/2500_2_32.png" /> 68<br />\
    <img src="styles/legend/2500_2_33.png" /> 70<br />\
    <img src="styles/legend/2500_2_34.png" /> 71<br />\
    <img src="styles/legend/2500_2_35.png" /> 72<br />\
    <img src="styles/legend/2500_2_36.png" /> 73<br />\
    <img src="styles/legend/2500_2_37.png" /> 75<br />\
    <img src="styles/legend/2500_2_38.png" /> 76<br />\
    <img src="styles/legend/2500_2_39.png" /> 77<br />\
    <img src="styles/legend/2500_2_40.png" /> 78<br />\
    <img src="styles/legend/2500_2_41.png" /> 79<br />\
    <img src="styles/legend/2500_2_42.png" /> 80<br />\
    <img src="styles/legend/2500_2_43.png" /> 81<br />\
    <img src="styles/legend/2500_2_44.png" /> 83<br />\
    <img src="styles/legend/2500_2_45.png" /> 85<br />\
    <img src="styles/legend/2500_2_46.png" /> 87<br />\
    <img src="styles/legend/2500_2_47.png" /> 89<br />\
    <img src="styles/legend/2500_2_48.png" /> 90<br />\
    <img src="styles/legend/2500_2_49.png" /> 91<br />\
    <img src="styles/legend/2500_2_50.png" /> 92<br />\
    <img src="styles/legend/2500_2_51.png" /> 94<br />\
    <img src="styles/legend/2500_2_52.png" /> 95<br />\
    <img src="styles/legend/2500_2_53.png" /> 96<br />\
    <img src="styles/legend/2500_2_54.png" /> 97<br />\
    <img src="styles/legend/2500_2_55.png" /> 99<br />\
    <img src="styles/legend/2500_2_56.png" /> 100<br />\
    <img src="styles/legend/2500_2_57.png" /> 101<br />\
    <img src="styles/legend/2500_2_58.png" /> 102<br />\
    <img src="styles/legend/2500_2_59.png" /> 103<br />\
    <img src="styles/legend/2500_2_60.png" /> 104<br />\
    <img src="styles/legend/2500_2_61.png" /> 105<br />\
    <img src="styles/legend/2500_2_62.png" /> 106<br />\
    <img src="styles/legend/2500_2_63.png" /> 107<br />\
    <img src="styles/legend/2500_2_64.png" /> 108<br />\
    <img src="styles/legend/2500_2_65.png" /> 109<br />\
    <img src="styles/legend/2500_2_66.png" /> 111<br />\
    <img src="styles/legend/2500_2_67.png" /> 112<br />\
    <img src="styles/legend/2500_2_68.png" /> 113<br />\
    <img src="styles/legend/2500_2_69.png" /> 114<br />\
    <img src="styles/legend/2500_2_70.png" /> 115<br />\
    <img src="styles/legend/2500_2_71.png" /> 116<br />\
    <img src="styles/legend/2500_2_72.png" /> 117<br />\
    <img src="styles/legend/2500_2_73.png" /> 118<br />\
    <img src="styles/legend/2500_2_74.png" /> 120<br />\
    <img src="styles/legend/2500_2_75.png" /> 121<br />\
    <img src="styles/legend/2500_2_76.png" /> 122<br />\
    <img src="styles/legend/2500_2_77.png" /> 123<br />\
    <img src="styles/legend/2500_2_78.png" /> 124<br />\
    <img src="styles/legend/2500_2_79.png" /> 125<br />\
    <img src="styles/legend/2500_2_80.png" /> 126<br />\
    <img src="styles/legend/2500_2_81.png" /> 127<br />\
    <img src="styles/legend/2500_2_82.png" /> 128<br />\
    <img src="styles/legend/2500_2_83.png" /> 129<br />\
    <img src="styles/legend/2500_2_84.png" /> 130<br />\
    <img src="styles/legend/2500_2_85.png" /> 131<br />\
    <img src="styles/legend/2500_2_86.png" /> 132<br />\
    <img src="styles/legend/2500_2_87.png" /> 133<br />\
    <img src="styles/legend/2500_2_88.png" /> 134<br />\
    <img src="styles/legend/2500_2_89.png" /> 135<br />\
    <img src="styles/legend/2500_2_90.png" /> 136<br />\
    <img src="styles/legend/2500_2_91.png" /> 137<br />\
    <img src="styles/legend/2500_2_92.png" /> 138<br />\
    <img src="styles/legend/2500_2_93.png" /> 139<br />\
    <img src="styles/legend/2500_2_94.png" /> 140<br />\
    <img src="styles/legend/2500_2_95.png" /> 141<br />\
    <img src="styles/legend/2500_2_96.png" /> 143<br />\
    <img src="styles/legend/2500_2_97.png" /> 144<br />\
    <img src="styles/legend/2500_2_98.png" /> 145<br />\
    <img src="styles/legend/2500_2_99.png" /> 146<br />\
    <img src="styles/legend/2500_2_100.png" /> 147<br />\
    <img src="styles/legend/2500_2_101.png" /> 148<br />\
    <img src="styles/legend/2500_2_102.png" /> 149<br />\
    <img src="styles/legend/2500_2_103.png" /> 150<br />\
    <img src="styles/legend/2500_2_104.png" /> 151<br />\
    <img src="styles/legend/2500_2_105.png" /> 152<br />\
    <img src="styles/legend/2500_2_106.png" /> 154<br />\
    <img src="styles/legend/2500_2_107.png" /> 155<br />\
    <img src="styles/legend/2500_2_108.png" /> 156<br />\
    <img src="styles/legend/2500_2_109.png" /> 157<br />\
    <img src="styles/legend/2500_2_110.png" /> 158<br />\
    <img src="styles/legend/2500_2_111.png" /> 159<br />\
    <img src="styles/legend/2500_2_112.png" /> 160<br />\
    <img src="styles/legend/2500_2_113.png" /> 161<br />\
    <img src="styles/legend/2500_2_114.png" /> 163<br />\
    <img src="styles/legend/2500_2_115.png" /> 165<br />\
    <img src="styles/legend/2500_2_116.png" /> 166<br />\
    <img src="styles/legend/2500_2_117.png" /> 167<br />\
    <img src="styles/legend/2500_2_118.png" /> 168<br />\
    <img src="styles/legend/2500_2_119.png" /> 169<br />\
    <img src="styles/legend/2500_2_120.png" /> 170<br />\
    <img src="styles/legend/2500_2_121.png" /> 171<br />\
    <img src="styles/legend/2500_2_122.png" /> 172<br />\
    <img src="styles/legend/2500_2_123.png" /> 173<br />\
    <img src="styles/legend/2500_2_124.png" /> 174<br />\
    <img src="styles/legend/2500_2_125.png" /> 175<br />\
    <img src="styles/legend/2500_2_126.png" /> 176<br />\
    <img src="styles/legend/2500_2_127.png" /> 177<br />\
    <img src="styles/legend/2500_2_128.png" /> 178<br />\
    <img src="styles/legend/2500_2_129.png" /> 179<br />\
    <img src="styles/legend/2500_2_130.png" /> 180<br />\
    <img src="styles/legend/2500_2_131.png" /> 181<br />\
    <img src="styles/legend/2500_2_132.png" /> 182<br />\
    <img src="styles/legend/2500_2_133.png" /> 183<br />\
    <img src="styles/legend/2500_2_134.png" /> 184<br />\
    <img src="styles/legend/2500_2_135.png" /> 185<br />\
    <img src="styles/legend/2500_2_136.png" /> 186<br />\
    <img src="styles/legend/2500_2_137.png" /> 187<br />\
    <img src="styles/legend/2500_2_138.png" /> 188<br />\
    <img src="styles/legend/2500_2_139.png" /> 189<br />\
    <img src="styles/legend/2500_2_140.png" /> 190<br />\
    <img src="styles/legend/2500_2_141.png" /> 191<br />\
    <img src="styles/legend/2500_2_142.png" /> 192<br />\
    <img src="styles/legend/2500_2_143.png" /> 193<br />\
    <img src="styles/legend/2500_2_144.png" /> 194<br />\
    <img src="styles/legend/2500_2_145.png" /> 195<br />\
    <img src="styles/legend/2500_2_146.png" /> 196<br />\
    <img src="styles/legend/2500_2_147.png" /> 197<br />\
    <img src="styles/legend/2500_2_148.png" /> 198<br />\
    <img src="styles/legend/2500_2_149.png" /> 199<br />\
    <img src="styles/legend/2500_2_150.png" /> 201<br />\
    <img src="styles/legend/2500_2_151.png" /> 202<br />\
    <img src="styles/legend/2500_2_152.png" /> 203<br />\
    <img src="styles/legend/2500_2_153.png" /> 204<br />\
    <img src="styles/legend/2500_2_154.png" /> 205<br />\
    <img src="styles/legend/2500_2_155.png" /> 206<br />\
    <img src="styles/legend/2500_2_156.png" /> 207<br />\
    <img src="styles/legend/2500_2_157.png" /> 208<br />\
    <img src="styles/legend/2500_2_158.png" /> 209<br />\
    <img src="styles/legend/2500_2_159.png" /> 210<br />\
    <img src="styles/legend/2500_2_160.png" /> 211<br />\
    <img src="styles/legend/2500_2_161.png" /> 212<br />\
    <img src="styles/legend/2500_2_162.png" /> 213<br />\
    <img src="styles/legend/2500_2_163.png" /> 214<br />\
    <img src="styles/legend/2500_2_164.png" /> 215<br />\
    <img src="styles/legend/2500_2_165.png" /> 216<br />\
    <img src="styles/legend/2500_2_166.png" /> 217<br />\
    <img src="styles/legend/2500_2_167.png" /> 218<br />\
    <img src="styles/legend/2500_2_168.png" /> 219<br />\
    <img src="styles/legend/2500_2_169.png" /> 220<br />\
    <img src="styles/legend/2500_2_170.png" /> 222<br />\
    <img src="styles/legend/2500_2_171.png" /> 223<br />\
    <img src="styles/legend/2500_2_172.png" /> 224<br />\
    <img src="styles/legend/2500_2_173.png" /> 227<br />\
    <img src="styles/legend/2500_2_174.png" /> 228<br />\
    <img src="styles/legend/2500_2_175.png" /> 229<br />\
    <img src="styles/legend/2500_2_176.png" /> 230<br />\
    <img src="styles/legend/2500_2_177.png" /> 231<br />\
    <img src="styles/legend/2500_2_178.png" /> 232<br />\
    <img src="styles/legend/2500_2_179.png" /> 233<br />\
    <img src="styles/legend/2500_2_180.png" /> 234<br />\
    <img src="styles/legend/2500_2_181.png" /> 235<br />\
    <img src="styles/legend/2500_2_182.png" /> 236<br />\
    <img src="styles/legend/2500_2_183.png" /> 237<br />\
    <img src="styles/legend/2500_2_184.png" /> 238<br />\
    <img src="styles/legend/2500_2_185.png" /> 239<br />\
    <img src="styles/legend/2500_2_186.png" /> 240<br />\
    <img src="styles/legend/2500_2_187.png" /> 241<br />\
    <img src="styles/legend/2500_2_188.png" /> 242<br />\
    <img src="styles/legend/2500_2_189.png" /> 243<br />\
    <img src="styles/legend/2500_2_190.png" /> 244<br />\
    <img src="styles/legend/2500_2_191.png" /> 245<br />\
    <img src="styles/legend/2500_2_192.png" /> 246<br />\
    <img src="styles/legend/2500_2_193.png" /> 247<br />\
    <img src="styles/legend/2500_2_194.png" /> 248<br />\
    <img src="styles/legend/2500_2_195.png" /> 249<br />\
    <img src="styles/legend/2500_2_196.png" /> 250<br />\
    <img src="styles/legend/2500_2_197.png" /> 251<br />\
    <img src="styles/legend/2500_2_198.png" /> 253<br />\
    <img src="styles/legend/2500_2_199.png" /> 254<br />\
    <img src="styles/legend/2500_2_200.png" /> 255<br />\
    <img src="styles/legend/2500_2_201.png" /> 257<br />\
    <img src="styles/legend/2500_2_202.png" /> 261<br />\
    <img src="styles/legend/2500_2_203.png" /> 262<br />\
    <img src="styles/legend/2500_2_204.png" /> 263<br />\
    <img src="styles/legend/2500_2_205.png" /> 264<br />\
    <img src="styles/legend/2500_2_206.png" /> 265<br />\
    <img src="styles/legend/2500_2_207.png" /> 266<br />\
    <img src="styles/legend/2500_2_208.png" /> 267<br />\
    <img src="styles/legend/2500_2_209.png" /> 268<br />\
    <img src="styles/legend/2500_2_210.png" /> 269<br />\
    <img src="styles/legend/2500_2_211.png" /> 270<br />\
    <img src="styles/legend/2500_2_212.png" /> 271<br />\
    <img src="styles/legend/2500_2_213.png" /> 272<br />\
    <img src="styles/legend/2500_2_214.png" /> 273<br />\
    <img src="styles/legend/2500_2_215.png" /> 274<br />\
    <img src="styles/legend/2500_2_216.png" /> 275<br />\
    <img src="styles/legend/2500_2_217.png" /> 276<br />\
    <img src="styles/legend/2500_2_218.png" /> 277<br />\
    <img src="styles/legend/2500_2_219.png" /> 279<br />\
    <img src="styles/legend/2500_2_220.png" /> 280<br />\
    <img src="styles/legend/2500_2_221.png" /> 281<br />\
    <img src="styles/legend/2500_2_222.png" /> 282<br />\
    <img src="styles/legend/2500_2_223.png" /> 283<br />\
    <img src="styles/legend/2500_2_224.png" /> 284<br />\
    <img src="styles/legend/2500_2_225.png" /> 285<br />\
    <img src="styles/legend/2500_2_226.png" /> 286<br />\
    <img src="styles/legend/2500_2_227.png" /> 287<br />\
    <img src="styles/legend/2500_2_228.png" /> 289<br />\
    <img src="styles/legend/2500_2_229.png" /> 290<br />\
    <img src="styles/legend/2500_2_230.png" /> 292<br />\
    <img src="styles/legend/2500_2_231.png" /> 294<br />\
    <img src="styles/legend/2500_2_232.png" /> 296<br />\
    <img src="styles/legend/2500_2_233.png" /> 298<br />\
    <img src="styles/legend/2500_2_234.png" /> 299<br />\
    <img src="styles/legend/2500_2_235.png" /> 300<br />\
    <img src="styles/legend/2500_2_236.png" /> 301<br />\
    <img src="styles/legend/2500_2_237.png" /> 302<br />\
    <img src="styles/legend/2500_2_238.png" /> 303<br />\
    <img src="styles/legend/2500_2_239.png" /> 304<br />\
    <img src="styles/legend/2500_2_240.png" /> 305<br />\
    <img src="styles/legend/2500_2_241.png" /> 307<br />\
    <img src="styles/legend/2500_2_242.png" /> 308<br />\
    <img src="styles/legend/2500_2_243.png" /> 309<br />\
    <img src="styles/legend/2500_2_244.png" /> 310<br />\
    <img src="styles/legend/2500_2_245.png" /> 312<br />\
    <img src="styles/legend/2500_2_246.png" /> 313<br />\
    <img src="styles/legend/2500_2_247.png" /> 314<br />\
    <img src="styles/legend/2500_2_248.png" /> 315<br />\
    <img src="styles/legend/2500_2_249.png" /> 316<br />\
    <img src="styles/legend/2500_2_250.png" /> 318<br />\
    <img src="styles/legend/2500_2_251.png" /> 319<br />\
    <img src="styles/legend/2500_2_252.png" /> 320<br />\
    <img src="styles/legend/2500_2_253.png" /> 321<br />\
    <img src="styles/legend/2500_2_254.png" /> 322<br />\
    <img src="styles/legend/2500_2_255.png" /> 325<br />\
    <img src="styles/legend/2500_2_256.png" /> 327<br />\
    <img src="styles/legend/2500_2_257.png" /> 328<br />\
    <img src="styles/legend/2500_2_258.png" /> 329<br />\
    <img src="styles/legend/2500_2_259.png" /> 330<br />\
    <img src="styles/legend/2500_2_260.png" /> 331<br />\
    <img src="styles/legend/2500_2_261.png" /> 332<br />\
    <img src="styles/legend/2500_2_262.png" /> 333<br />\
    <img src="styles/legend/2500_2_263.png" /> 334<br />\
    <img src="styles/legend/2500_2_264.png" /> 335<br />\
    <img src="styles/legend/2500_2_265.png" /> 336<br />\
    <img src="styles/legend/2500_2_266.png" /> 337<br />\
    <img src="styles/legend/2500_2_267.png" /> 338<br />\
    <img src="styles/legend/2500_2_268.png" /> 339<br />\
    <img src="styles/legend/2500_2_269.png" /> 341<br />\
    <img src="styles/legend/2500_2_270.png" /> 345<br />\
    <img src="styles/legend/2500_2_271.png" /> 349<br />\
    <img src="styles/legend/2500_2_272.png" /> 350<br />\
    <img src="styles/legend/2500_2_273.png" /> 352<br />\
    <img src="styles/legend/2500_2_274.png" /> 353<br />\
    <img src="styles/legend/2500_2_275.png" /> 355<br />\
    <img src="styles/legend/2500_2_276.png" /> 356<br />\
    <img src="styles/legend/2500_2_277.png" /> 357<br />\
    <img src="styles/legend/2500_2_278.png" /> 358<br />\
    <img src="styles/legend/2500_2_279.png" /> 360<br />\
    <img src="styles/legend/2500_2_280.png" /> 361<br />\
    <img src="styles/legend/2500_2_281.png" /> 364<br />\
    <img src="styles/legend/2500_2_282.png" /> 366<br />\
    <img src="styles/legend/2500_2_283.png" /> 367<br />\
    <img src="styles/legend/2500_2_284.png" /> 368<br />\
    <img src="styles/legend/2500_2_285.png" /> 369<br />\
    <img src="styles/legend/2500_2_286.png" /> 370<br />\
    <img src="styles/legend/2500_2_287.png" /> 371<br />\
    <img src="styles/legend/2500_2_288.png" /> 372<br />\
    <img src="styles/legend/2500_2_289.png" /> 375<br />\
    <img src="styles/legend/2500_2_290.png" /> 376<br />\
    <img src="styles/legend/2500_2_291.png" /> 379<br />\
    <img src="styles/legend/2500_2_292.png" /> 381<br />\
    <img src="styles/legend/2500_2_293.png" /> 382<br />\
    <img src="styles/legend/2500_2_294.png" /> 383<br />\
    <img src="styles/legend/2500_2_295.png" /> 388<br />\
    <img src="styles/legend/2500_2_296.png" /> 391<br />\
    <img src="styles/legend/2500_2_297.png" /> 392<br />\
    <img src="styles/legend/2500_2_298.png" /> 395<br />\
    <img src="styles/legend/2500_2_299.png" /> 397<br />\
    <img src="styles/legend/2500_2_300.png" /> 398<br />\
    <img src="styles/legend/2500_2_301.png" /> 400<br />\
    <img src="styles/legend/2500_2_302.png" /> 401<br />\
    <img src="styles/legend/2500_2_303.png" /> 403<br />\
    <img src="styles/legend/2500_2_304.png" /> 404<br />\
    <img src="styles/legend/2500_2_305.png" /> 407<br />\
    <img src="styles/legend/2500_2_306.png" /> 408<br />\
    <img src="styles/legend/2500_2_307.png" /> 409<br />\
    <img src="styles/legend/2500_2_308.png" /> 411<br />\
    <img src="styles/legend/2500_2_309.png" /> 415<br />\
    <img src="styles/legend/2500_2_310.png" /> 416<br />\
    <img src="styles/legend/2500_2_311.png" /> 417<br />\
    <img src="styles/legend/2500_2_312.png" /> 418<br />\
    <img src="styles/legend/2500_2_313.png" /> 419<br />\
    <img src="styles/legend/2500_2_314.png" /> 421<br />\
    <img src="styles/legend/2500_2_315.png" /> 425<br />\
    <img src="styles/legend/2500_2_316.png" /> 426<br />\
    <img src="styles/legend/2500_2_317.png" /> 429<br />\
    <img src="styles/legend/2500_2_318.png" /> 432<br />\
    <img src="styles/legend/2500_2_319.png" /> 434<br />\
    <img src="styles/legend/2500_2_320.png" /> 435<br />\
    <img src="styles/legend/2500_2_321.png" /> 436<br />\
    <img src="styles/legend/2500_2_322.png" /> 443<br />\
    <img src="styles/legend/2500_2_323.png" /> 444<br />\
    <img src="styles/legend/2500_2_324.png" /> 454<br />\
    <img src="styles/legend/2500_2_325.png" /> 457<br />\
    <img src="styles/legend/2500_2_326.png" /> 461<br />\
    <img src="styles/legend/2500_2_327.png" /> 467<br />\
    <img src="styles/legend/2500_2_328.png" /> 470<br />\
    <img src="styles/legend/2500_2_329.png" /> 479<br />\
    <img src="styles/legend/2500_2_330.png" /> 482<br />\
    <img src="styles/legend/2500_2_331.png" /> 485<br />\
    <img src="styles/legend/2500_2_332.png" /> 486<br />\
    <img src="styles/legend/2500_2_333.png" /> 496<br />\
    <img src="styles/legend/2500_2_334.png" /> 497<br />\
    <img src="styles/legend/2500_2_335.png" /> 503<br />\
    <img src="styles/legend/2500_2_336.png" /> 511<br />\
    <img src="styles/legend/2500_2_337.png" /> 516<br />\
    <img src="styles/legend/2500_2_338.png" /> 517<br />\
    <img src="styles/legend/2500_2_339.png" /> 525<br />\
    <img src="styles/legend/2500_2_340.png" /> 528<br />\
    <img src="styles/legend/2500_2_341.png" /> 533<br />\
    <img src="styles/legend/2500_2_342.png" /> 537<br />\
    <img src="styles/legend/2500_2_343.png" /> 547<br />\
    <img src="styles/legend/2500_2_344.png" /> 557<br />\
    <img src="styles/legend/2500_2_345.png" /> 567<br />\
    <img src="styles/legend/2500_2_346.png" /> 579<br />\
    <img src="styles/legend/2500_2_347.png" /> 602<br />\
    <img src="styles/legend/2500_2_348.png" /> 628<br />\
    <img src="styles/legend/2500_2_349.png" /> 710<br />\
    <img src="styles/legend/2500_2_350.png" /> 730<br />\
    <img src="styles/legend/2500_2_351.png" /> 758<br />\
    <img src="styles/legend/2500_2_352.png" /> 789<br />\
    <img src="styles/legend/2500_2_353.png" /> 790<br />\
    <img src="styles/legend/2500_2_354.png" /> 840<br />\
    <img src="styles/legend/2500_2_355.png" /> 1026<br />\
    <img src="styles/legend/2500_2_356.png" /> 1043<br />\
    <img src="styles/legend/2500_2_357.png" /> 1138<br />\
    <img src="styles/legend/2500_2_358.png" /> <br />'
        });
var format_2500_3 = new ol.format.GeoJSON();
var features_2500_3 = format_2500_3.readFeatures(json_2500_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2500_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2500_3.addFeatures(features_2500_3);
var lyr_2500_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2500_3, 
                style: style_2500_3,
                interactive: true,
    title: '火車站周圍2500地價圖<br />\
    <img src="styles/legend/2500_3_0.png" /> 104000<br />\
    <img src="styles/legend/2500_3_1.png" /> 104470<br />\
    <img src="styles/legend/2500_3_2.png" /> 107000<br />\
    <img src="styles/legend/2500_3_3.png" /> 108000<br />\
    <img src="styles/legend/2500_3_4.png" /> 109000<br />\
    <img src="styles/legend/2500_3_5.png" /> 112000<br />\
    <img src="styles/legend/2500_3_6.png" /> 126000<br />\
    <img src="styles/legend/2500_3_7.png" /> 129000<br />\
    <img src="styles/legend/2500_3_8.png" /> 25000<br />\
    <img src="styles/legend/2500_3_9.png" /> 26500<br />\
    <img src="styles/legend/2500_3_10.png" /> 28300<br />\
    <img src="styles/legend/2500_3_11.png" /> 29700<br />\
    <img src="styles/legend/2500_3_12.png" /> 30900<br />\
    <img src="styles/legend/2500_3_13.png" /> 31300<br />\
    <img src="styles/legend/2500_3_14.png" /> 31800<br />\
    <img src="styles/legend/2500_3_15.png" /> 32200<br />\
    <img src="styles/legend/2500_3_16.png" /> 32800<br />\
    <img src="styles/legend/2500_3_17.png" /> 33600<br />\
    <img src="styles/legend/2500_3_18.png" /> 34000<br />\
    <img src="styles/legend/2500_3_19.png" /> 34300<br />\
    <img src="styles/legend/2500_3_20.png" /> 35900<br />\
    <img src="styles/legend/2500_3_21.png" /> 36430<br />\
    <img src="styles/legend/2500_3_22.png" /> 36900<br />\
    <img src="styles/legend/2500_3_23.png" /> 38700<br />\
    <img src="styles/legend/2500_3_24.png" /> 45937<br />\
    <img src="styles/legend/2500_3_25.png" /> 47432<br />\
    <img src="styles/legend/2500_3_26.png" /> 48300<br />\
    <img src="styles/legend/2500_3_27.png" /> 49155<br />\
    <img src="styles/legend/2500_3_28.png" /> 50356<br />\
    <img src="styles/legend/2500_3_29.png" /> 51879<br />\
    <img src="styles/legend/2500_3_30.png" /> 52000<br />\
    <img src="styles/legend/2500_3_31.png" /> 52100<br />\
    <img src="styles/legend/2500_3_32.png" /> 52400<br />\
    <img src="styles/legend/2500_3_33.png" /> 52700<br />\
    <img src="styles/legend/2500_3_34.png" /> 52938<br />\
    <img src="styles/legend/2500_3_35.png" /> 53595<br />\
    <img src="styles/legend/2500_3_36.png" /> 53900<br />\
    <img src="styles/legend/2500_3_37.png" /> 53903<br />\
    <img src="styles/legend/2500_3_38.png" /> 55100<br />\
    <img src="styles/legend/2500_3_39.png" /> 57400<br />\
    <img src="styles/legend/2500_3_40.png" /> 57800<br />\
    <img src="styles/legend/2500_3_41.png" /> 59100<br />\
    <img src="styles/legend/2500_3_42.png" /> 59433<br />\
    <img src="styles/legend/2500_3_43.png" /> 60100<br />\
    <img src="styles/legend/2500_3_44.png" /> 60861<br />\
    <img src="styles/legend/2500_3_45.png" /> 61100<br />\
    <img src="styles/legend/2500_3_46.png" /> 61400<br />\
    <img src="styles/legend/2500_3_47.png" /> 61900<br />\
    <img src="styles/legend/2500_3_48.png" /> 62000<br />\
    <img src="styles/legend/2500_3_49.png" /> 62593<br />\
    <img src="styles/legend/2500_3_50.png" /> 62976<br />\
    <img src="styles/legend/2500_3_51.png" /> 63300<br />\
    <img src="styles/legend/2500_3_52.png" /> 63400<br />\
    <img src="styles/legend/2500_3_53.png" /> 64600<br />\
    <img src="styles/legend/2500_3_54.png" /> 65700<br />\
    <img src="styles/legend/2500_3_55.png" /> 66598<br />\
    <img src="styles/legend/2500_3_56.png" /> 67582<br />\
    <img src="styles/legend/2500_3_57.png" /> 68390<br />\
    <img src="styles/legend/2500_3_58.png" /> 68500<br />\
    <img src="styles/legend/2500_3_59.png" /> 69200<br />\
    <img src="styles/legend/2500_3_60.png" /> 77800<br />\
    <img src="styles/legend/2500_3_61.png" /> 79500<br />\
    <img src="styles/legend/2500_3_62.png" /> 87586<br />\
    <img src="styles/legend/2500_3_63.png" /> 96254<br />\
    <img src="styles/legend/2500_3_64.png" /> <br />'
        });
var lyr__4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://maps.nlsc.gov.tw/S_Maps/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "LANDSECT",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "段籍圖",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr__4, 0]);

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr_2500_2.setVisible(true);lyr_2500_3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr_2500_2,lyr_2500_3,lyr__4];
lyr__1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', '區名': '區名', '里名': '里名', '區里名': '區里名', '區代碼': '區代碼', '里代碼': '里代碼', });
lyr_2500_2.set('fieldAliases', {'fid': 'fid', 'U_ID': 'U_ID', 'CODEBASE': 'CODEBASE', 'CODE1': 'CODE1', 'CODE2': 'CODE2', 'TOWN_ID': 'TOWN_ID', 'TOWN': 'TOWN', 'COUNTY_ID': 'COUNTY_ID', 'COUNTY': 'COUNTY', 'X': 'X', 'Y': 'Y', 'AREA': 'AREA', '臺中市統計區人口統計_最小統計區 工作表1_InMetaDatCode': '臺中市統計區人口統計_最小統計區 工作表1_InMetaDatCode', '臺中市統計區人口統計_最小統計區 工作表1_InSTUnitCode': '臺中市統計區人口統計_最小統計區 工作表1_InSTUnitCode', '臺中市統計區人口統計_最小統計區 工作表1_InCountyId': '臺中市統計區人口統計_最小統計區 工作表1_InCountyId', '臺中市統計區人口統計_最小統計區 工作表1_OutTotal': '臺中市統計區人口統計_最小統計區 工作表1_OutTotal', '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_NAME': '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_NAME', '臺中市統計區人口統計_最小統計區 工作表1_DATA_TYPE': '臺中市統計區人口統計_最小統計區 工作表1_DATA_TYPE', '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_DESC': '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_DESC', '臺中市統計區人口統計_最小統計區 工作表1_DISPLAY_UNIT': '臺中市統計區人口統計_最小統計區 工作表1_DISPLAY_UNIT', '臺中市統計區人口統計_最小統計區 工作表1_INFO_TIME': '臺中市統計區人口統計_最小統計區 工作表1_INFO_TIME', '臺中市統計區人口統計_最小統計區 工作表1_CODE2': '臺中市統計區人口統計_最小統計區 工作表1_CODE2', '臺中市統計區人口統計_最小統計區 工作表1_CODEBASE': '臺中市統計區人口統計_最小統計區 工作表1_CODEBASE', '臺中市統計區人口統計_最小統計區 工作表1_H_CNT': '臺中市統計區人口統計_最小統計區 工作表1_H_CNT', '臺中市統計區人口統計_最小統計區 工作表1_P_CNT': '臺中市統計區人口統計_最小統計區 工作表1_P_CNT', '臺中市統計區人口統計_最小統計區 工作表1_M_CNT': '臺中市統計區人口統計_最小統計區 工作表1_M_CNT', '臺中市統計區人口統計_最小統計區 工作表1_F_CNT': '臺中市統計區人口統計_最小統計區 工作表1_F_CNT', });
lyr_2500_3.set('fieldAliases', {'fid': 'fid', 'U_ID': 'U_ID', 'CODEBASE': 'CODEBASE', 'CODE1': 'CODE1', 'CODE2': 'CODE2', 'TOWN_ID': 'TOWN_ID', 'TOWN': 'TOWN', 'COUNTY_ID': 'COUNTY_ID', 'COUNTY': 'COUNTY', 'X': 'X', 'Y': 'Y', 'AREA': 'AREA', '110年臺中市公告土地現值-1_鄉鎮市區': '110年臺中市公告土地現值-1_鄉鎮市區', '110年臺中市公告土地現值-1_段小段': '110年臺中市公告土地現值-1_段小段', '110年臺中市公告土地現值-1_地號': '110年臺中市公告土地現值-1_地號', '110年臺中市公告土地現值-1_面積': '110年臺中市公告土地現值-1_面積', '110年臺中市公告土地現值-1_公告現值': '110年臺中市公告土地現值-1_公告現值', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', '區名': 'TextEdit', '里名': 'TextEdit', '區里名': 'TextEdit', '區代碼': 'TextEdit', '里代碼': 'TextEdit', });
lyr_2500_2.set('fieldImages', {'fid': 'TextEdit', 'U_ID': 'TextEdit', 'CODEBASE': 'TextEdit', 'CODE1': 'TextEdit', 'CODE2': 'TextEdit', 'TOWN_ID': 'TextEdit', 'TOWN': 'TextEdit', 'COUNTY_ID': 'TextEdit', 'COUNTY': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'AREA': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_InMetaDatCode': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_InSTUnitCode': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_InCountyId': 'Range', '臺中市統計區人口統計_最小統計區 工作表1_OutTotal': 'Range', '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_NAME': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_DATA_TYPE': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_DESC': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_DISPLAY_UNIT': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_INFO_TIME': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_CODE2': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_CODEBASE': 'TextEdit', '臺中市統計區人口統計_最小統計區 工作表1_H_CNT': 'Range', '臺中市統計區人口統計_最小統計區 工作表1_P_CNT': 'Range', '臺中市統計區人口統計_最小統計區 工作表1_M_CNT': 'Range', '臺中市統計區人口統計_最小統計區 工作表1_F_CNT': 'Range', });
lyr_2500_3.set('fieldImages', {'fid': 'TextEdit', 'U_ID': 'TextEdit', 'CODEBASE': 'TextEdit', 'CODE1': 'TextEdit', 'CODE2': 'TextEdit', 'TOWN_ID': 'TextEdit', 'TOWN': 'TextEdit', 'COUNTY_ID': 'TextEdit', 'COUNTY': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'AREA': 'TextEdit', '110年臺中市公告土地現值-1_鄉鎮市區': 'TextEdit', '110年臺中市公告土地現值-1_段小段': 'TextEdit', '110年臺中市公告土地現值-1_地號': 'TextEdit', '110年臺中市公告土地現值-1_面積': 'TextEdit', '110年臺中市公告土地現值-1_公告現值': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', '區名': 'no label', '里名': 'no label', '區里名': 'no label', '區代碼': 'no label', '里代碼': 'no label', });
lyr_2500_2.set('fieldLabels', {'fid': 'no label', 'U_ID': 'no label', 'CODEBASE': 'no label', 'CODE1': 'no label', 'CODE2': 'no label', 'TOWN_ID': 'no label', 'TOWN': 'no label', 'COUNTY_ID': 'no label', 'COUNTY': 'no label', 'X': 'no label', 'Y': 'no label', 'AREA': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_InMetaDatCode': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_InSTUnitCode': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_InCountyId': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_OutTotal': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_NAME': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_DATA_TYPE': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_COLUMN_DESC': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_DISPLAY_UNIT': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_INFO_TIME': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_CODE2': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_CODEBASE': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_H_CNT': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_P_CNT': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_M_CNT': 'no label', '臺中市統計區人口統計_最小統計區 工作表1_F_CNT': 'no label', });
lyr_2500_3.set('fieldLabels', {'fid': 'no label', 'U_ID': 'no label', 'CODEBASE': 'no label', 'CODE1': 'no label', 'CODE2': 'no label', 'TOWN_ID': 'no label', 'TOWN': 'no label', 'COUNTY_ID': 'no label', 'COUNTY': 'no label', 'X': 'no label', 'Y': 'no label', 'AREA': 'no label', '110年臺中市公告土地現值-1_鄉鎮市區': 'no label', '110年臺中市公告土地現值-1_段小段': 'no label', '110年臺中市公告土地現值-1_地號': 'no label', '110年臺中市公告土地現值-1_面積': 'no label', '110年臺中市公告土地現值-1_公告現值': 'no label', });
lyr_2500_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});