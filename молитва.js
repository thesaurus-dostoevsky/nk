var nodes = [{'id': '651', 'label': 'человек', 'title': 'Философский и др. дискурсы, 6062', 'value': '1', 'group': '', 'shape': 'triangle'},
{'id': '9', 'label': 'бог', 'title': 'Этнопоэтика, 2352', 'value': '1', 'group': '4', 'shape': 'hexagon'},
{'id': '660', 'label': 'сердце', 'title': 'Психология, 1129', 'value': '1', 'group': '', 'shape': 'box'},
{'id': '4', 'label': 'слово', 'title': 'Этнопоэтика, 3907', 'value': '1', 'group': '4', 'shape': 'hexagon'},
{'id': '76', 'label': 'молитва', 'title': 'Этнопоэтика, 556', 'value': '1', 'group': '4', 'shape': 'hexagon', 'font': {'strokeWidth': 10, 'strokeColor': '#ffffff'}},
];
var edges = [{'from': '9', 'to': '2', 'title': '81', 'value': '81'},
{'from': '9', 'to': '9', 'title': '216', 'value': '216'},
{'from': '9', 'to': '3', 'title': '87', 'value': '87'},
{'from': '39', 'to': '4', 'title': '27', 'value': '27'},
{'from': '28', 'to': '4', 'title': '29', 'value': '29'},
{'from': '8', 'to': '4', 'title': '87', 'value': '87'},
{'from': '8', 'to': '9', 'title': '30', 'value': '30'},
{'from': '9', 'to': '32', 'title': '25', 'value': '25'},
{'from': '20', 'to': '4', 'title': '66', 'value': '66'},
{'from': '3', 'to': '4', 'title': '150', 'value': '150'},
{'from': '9', 'to': '4', 'title': '171', 'value': '171'},
{'from': '9', 'to': '56', 'title': '26', 'value': '26'},
{'from': '88', 'to': '4', 'title': '35', 'value': '35'},
{'from': '9', 'to': '85', 'title': '28', 'value': '28'},
{'from': '33', 'to': '4', 'title': '142', 'value': '142'},
{'from': '9', 'to': '13', 'title': '51', 'value': '51'},
{'from': '9', 'to': '20', 'title': '107', 'value': '107'},
{'from': '9', 'to': '29', 'title': '54', 'value': '54'},
{'from': '9', 'to': '11', 'title': '129', 'value': '129'},
{'from': '9', 'to': '23', 'title': '126', 'value': '126'},
{'from': '9', 'to': '57', 'title': '46', 'value': '46'},
{'from': '9', 'to': '35', 'title': '53', 'value': '53'},
{'from': '9', 'to': '76', 'title': '50', 'value': '50'},
{'from': '29', 'to': '4', 'title': '70', 'value': '70'},
{'from': '19', 'to': '4', 'title': '28', 'value': '28'},
{'from': '9', 'to': '31', 'title': '25', 'value': '25'},
{'from': '9', 'to': '52', 'title': '48', 'value': '48'},
{'from': '4', 'to': '35', 'title': '33', 'value': '33'},
{'from': '4', 'to': '4', 'title': '229', 'value': '229'},
{'from': '9', 'to': '46', 'title': '34', 'value': '34'},
{'from': '18', 'to': '4', 'title': '40', 'value': '40'},
{'from': '44', 'to': '4', 'title': '27', 'value': '27'},
{'from': '40', 'to': '4', 'title': '28', 'value': '28'},
{'from': '9', 'to': '12', 'title': '45', 'value': '45'},
{'from': '9', 'to': '21', 'title': '35', 'value': '35'},
{'from': '76', 'to': '4', 'title': '51', 'value': '51'},
{'from': '76', 'to': '76', 'title': '38', 'value': '38'},
{'from': '109', 'to': '4', 'title': '26', 'value': '26'},
{'from': '4', 'to': '31', 'title': '37', 'value': '37'},
{'from': '4', 'to': '21', 'title': '71', 'value': '71'},
{'from': '9', 'to': '146', 'title': '47', 'value': '47'},
{'from': '58', 'to': '4', 'title': '29', 'value': '29'},
{'from': '4', 'to': '15', 'title': '67', 'value': '67'},
{'from': '9', 'to': '18', 'title': '32', 'value': '32'},
{'from': '4', 'to': '36', 'title': '114', 'value': '114'},
{'from': '57', 'to': '4', 'title': '26', 'value': '26'},
{'from': '23', 'to': '4', 'title': '61', 'value': '61'},
{'from': '43', 'to': '4', 'title': '78', 'value': '78'},
{'from': '4', 'to': '14', 'title': '53', 'value': '53'},
{'from': '10', 'to': '4', 'title': '68', 'value': '68'},
{'from': '9', 'to': '58', 'title': '28', 'value': '28'},
{'from': '9', 'to': '41', 'title': '29', 'value': '29'},
{'from': '25', 'to': '4', 'title': '41', 'value': '41'},
{'from': '2', 'to': '4', 'title': '105', 'value': '105'},
{'from': '9', 'to': '153', 'title': '34', 'value': '34'},
{'from': '5', 'to': '4', 'title': '177', 'value': '177'},
{'from': '4', 'to': '26', 'title': '42', 'value': '42'},
{'from': '9', 'to': '42', 'title': '32', 'value': '32'},
{'from': '9', 'to': '159', 'title': '33', 'value': '33'},
{'from': '81', 'to': '4', 'title': '30', 'value': '30'},
{'from': '17', 'to': '4', 'title': '54', 'value': '54'},
{'from': '9', 'to': '6', 'title': '33', 'value': '33'},
{'from': '4', 'to': '7', 'title': '126', 'value': '126'},
{'from': '4', 'to': '49', 'title': '30', 'value': '30'},
{'from': '4', 'to': '38', 'title': '49', 'value': '49'},
{'from': '41', 'to': '4', 'title': '35', 'value': '35'},
{'from': '4', 'to': '55', 'title': '36', 'value': '36'},
{'from': '4', 'to': '11', 'title': '93', 'value': '93'},
{'from': '1', 'to': '4', 'title': '138', 'value': '138'},
{'from': '9', 'to': '71', 'title': '44', 'value': '44'},
{'from': '6', 'to': '4', 'title': '85', 'value': '85'},
{'from': '4', 'to': '99', 'title': '33', 'value': '33'},
{'from': '9', 'to': '5', 'title': '35', 'value': '35'},
{'from': '22', 'to': '4', 'title': '36', 'value': '36'},
{'from': '60', 'to': '4', 'title': '42', 'value': '42'},
{'from': '4', 'to': '114', 'title': '33', 'value': '33'},
{'from': '9', 'to': '177', 'title': '31', 'value': '31'},
{'from': '16', 'to': '4', 'title': '47', 'value': '47'},
{'from': '9', 'to': '186', 'title': '51', 'value': '51'},
{'from': '9', 'to': '65', 'title': '34', 'value': '34'},
{'from': '13', 'to': '4', 'title': '54', 'value': '54'},
{'from': '37', 'to': '4', 'title': '26', 'value': '26'},
{'from': '32', 'to': '4', 'title': '27', 'value': '27'},
{'from': '27', 'to': '4', 'title': '40', 'value': '40'},
{'from': '9', 'to': '93', 'title': '25', 'value': '25'},
{'from': '9', 'to': '1', 'title': '37', 'value': '37'},
{'from': '4', 'to': '12', 'title': '41', 'value': '41'},
{'from': '9', 'to': '200', 'title': '39', 'value': '39'},
{'from': '46', 'to': '4', 'title': '48', 'value': '48'},
{'from': '92', 'to': '4', 'title': '46', 'value': '46'},
{'from': '42', 'to': '4', 'title': '29', 'value': '29'},
{'from': '45', 'to': '4', 'title': '37', 'value': '37'},
{'from': '34', 'to': '4', 'title': '43', 'value': '43'},
{'from': '62', 'to': '4', 'title': '37', 'value': '37'},
{'from': '47', 'to': '4', 'title': '26', 'value': '26'},
{'from': '65', 'to': '4', 'title': '26', 'value': '26'},
{'from': '64', 'to': '4', 'title': '43', 'value': '43'},
{'from': '643', 'to': '651', 'title': '86', 'value': '86'},
{'from': '643', 'to': '9', 'title': '49', 'value': '49'},
{'from': '644', 'to': '4', 'title': '65', 'value': '65'},
{'from': '644', 'to': '651', 'title': '44', 'value': '44'},
{'from': '646', 'to': '651', 'title': '74', 'value': '74'},
{'from': '648', 'to': '651', 'title': '45', 'value': '45'},
{'from': '650', 'to': '651', 'title': '66', 'value': '66'},
{'from': '650', 'to': '4', 'title': '44', 'value': '44'},
{'from': '651', 'to': '667', 'title': '568', 'value': '568'},
{'from': '651', 'to': '9', 'title': '528', 'value': '528'},
{'from': '651', 'to': '666', 'title': '432', 'value': '432'},
{'from': '651', 'to': '5', 'title': '392', 'value': '392'},
{'from': '651', 'to': '20', 'title': '311', 'value': '311'},
{'from': '651', 'to': '653', 'title': '287', 'value': '287'},
{'from': '651', 'to': '2', 'title': '279', 'value': '279'},
{'from': '651', 'to': '4', 'title': '237', 'value': '237'},
{'from': '651', 'to': '11', 'title': '236', 'value': '236'},
{'from': '651', 'to': '18', 'title': '228', 'value': '228'},
{'from': '651', 'to': '3', 'title': '227', 'value': '227'},
{'from': '651', 'to': '6', 'title': '219', 'value': '219'},
{'from': '651', 'to': '13', 'title': '214', 'value': '214'},
{'from': '651', 'to': '662', 'title': '213', 'value': '213'},
{'from': '651', 'to': '1', 'title': '192', 'value': '192'},
{'from': '651', 'to': '57', 'title': '183', 'value': '183'},
{'from': '651', 'to': '23', 'title': '165', 'value': '165'},
{'from': '651', 'to': '12', 'title': '149', 'value': '149'},
{'from': '651', 'to': '660', 'title': '147', 'value': '147'},
{'from': '651', 'to': '31', 'title': '138', 'value': '138'},
{'from': '651', 'to': '29', 'title': '135', 'value': '135'},
{'from': '651', 'to': '35', 'title': '129', 'value': '129'},
{'from': '651', 'to': '27', 'title': '129', 'value': '129'},
{'from': '651', 'to': '41', 'title': '120', 'value': '120'},
{'from': '651', 'to': '21', 'title': '115', 'value': '115'},
{'from': '651', 'to': '64', 'title': '111', 'value': '111'},
{'from': '651', 'to': '19', 'title': '110', 'value': '110'},
{'from': '651', 'to': '52', 'title': '109', 'value': '109'},
{'from': '651', 'to': '652', 'title': '108', 'value': '108'},
{'from': '651', 'to': '8', 'title': '105', 'value': '105'},
{'from': '651', 'to': '54', 'title': '104', 'value': '104'},
{'from': '651', 'to': '56', 'title': '94', 'value': '94'},
{'from': '651', 'to': '46', 'title': '91', 'value': '91'},
{'from': '651', 'to': '10', 'title': '85', 'value': '85'},
{'from': '651', 'to': '85', 'title': '83', 'value': '83'},
{'from': '651', 'to': '58', 'title': '79', 'value': '79'},
{'from': '651', 'to': '22', 'title': '79', 'value': '79'},
{'from': '651', 'to': '61', 'title': '75', 'value': '75'},
{'from': '651', 'to': '24', 'title': '74', 'value': '74'},
{'from': '651', 'to': '44', 'title': '73', 'value': '73'},
{'from': '651', 'to': '45', 'title': '70', 'value': '70'},
{'from': '651', 'to': '280', 'title': '68', 'value': '68'},
{'from': '651', 'to': '42', 'title': '66', 'value': '66'},
{'from': '651', 'to': '32', 'title': '65', 'value': '65'},
{'from': '651', 'to': '661', 'title': '65', 'value': '65'},
{'from': '651', 'to': '15', 'title': '61', 'value': '61'},
{'from': '651', 'to': '75', 'title': '60', 'value': '60'},
{'from': '651', 'to': '69', 'title': '60', 'value': '60'},
{'from': '651', 'to': '122', 'title': '59', 'value': '59'},
{'from': '651', 'to': '28', 'title': '58', 'value': '58'},
{'from': '651', 'to': '71', 'title': '58', 'value': '58'},
{'from': '651', 'to': '33', 'title': '57', 'value': '57'},
{'from': '651', 'to': '30', 'title': '55', 'value': '55'},
{'from': '651', 'to': '140', 'title': '55', 'value': '55'},
{'from': '651', 'to': '116', 'title': '54', 'value': '54'},
{'from': '651', 'to': '53', 'title': '53', 'value': '53'},
{'from': '651', 'to': '124', 'title': '53', 'value': '53'},
{'from': '651', 'to': '14', 'title': '50', 'value': '50'},
{'from': '651', 'to': '26', 'title': '49', 'value': '49'},
{'from': '651', 'to': '123', 'title': '48', 'value': '48'},
{'from': '651', 'to': '162', 'title': '48', 'value': '48'},
{'from': '651', 'to': '177', 'title': '47', 'value': '47'},
{'from': '651', 'to': '7', 'title': '47', 'value': '47'},
{'from': '651', 'to': '654', 'title': '45', 'value': '45'},
{'from': '651', 'to': '51', 'title': '42', 'value': '42'},
{'from': '651', 'to': '137', 'title': '42', 'value': '42'},
{'from': '651', 'to': '187', 'title': '40', 'value': '40'},
{'from': '651', 'to': '258', 'title': '40', 'value': '40'},
{'from': '651', 'to': '65', 'title': '39', 'value': '39'},
{'from': '651', 'to': '228', 'title': '38', 'value': '38'},
{'from': '651', 'to': '40', 'title': '38', 'value': '38'},
{'from': '651', 'to': '68', 'title': '38', 'value': '38'},
{'from': '651', 'to': '164', 'title': '37', 'value': '37'},
{'from': '651', 'to': '230', 'title': '36', 'value': '36'},
{'from': '651', 'to': '103', 'title': '36', 'value': '36'},
{'from': '651', 'to': '49', 'title': '36', 'value': '36'},
{'from': '651', 'to': '37', 'title': '36', 'value': '36'},
{'from': '651', 'to': '200', 'title': '36', 'value': '36'},
{'from': '651', 'to': '55', 'title': '34', 'value': '34'},
{'from': '651', 'to': '80', 'title': '33', 'value': '33'},
{'from': '651', 'to': '93', 'title': '33', 'value': '33'},
{'from': '651', 'to': '293', 'title': '32', 'value': '32'},
{'from': '651', 'to': '129', 'title': '32', 'value': '32'},
{'from': '651', 'to': '286', 'title': '31', 'value': '31'},
{'from': '651', 'to': '259', 'title': '31', 'value': '31'},
{'from': '651', 'to': '76', 'title': '31', 'value': '31'},
{'from': '651', 'to': '77', 'title': '30', 'value': '30'},
{'from': '651', 'to': '144', 'title': '30', 'value': '30'},
{'from': '651', 'to': '43', 'title': '30', 'value': '30'},
{'from': '651', 'to': '657', 'title': '30', 'value': '30'},
{'from': '651', 'to': '271', 'title': '29', 'value': '29'},
{'from': '651', 'to': '160', 'title': '29', 'value': '29'},
{'from': '651', 'to': '170', 'title': '29', 'value': '29'},
{'from': '651', 'to': '100', 'title': '29', 'value': '29'},
{'from': '651', 'to': '256', 'title': '28', 'value': '28'},
{'from': '651', 'to': '38', 'title': '28', 'value': '28'},
{'from': '651', 'to': '67', 'title': '28', 'value': '28'},
{'from': '651', 'to': '25', 'title': '27', 'value': '27'},
{'from': '651', 'to': '63', 'title': '27', 'value': '27'},
{'from': '651', 'to': '159', 'title': '27', 'value': '27'},
{'from': '651', 'to': '91', 'title': '27', 'value': '27'},
{'from': '651', 'to': '107', 'title': '26', 'value': '26'},
{'from': '651', 'to': '183', 'title': '26', 'value': '26'},
{'from': '651', 'to': '665', 'title': '26', 'value': '26'},
{'from': '651', 'to': '168', 'title': '25', 'value': '25'},
{'from': '651', 'to': '47', 'title': '25', 'value': '25'},
{'from': '651', 'to': '143', 'title': '25', 'value': '25'},
{'from': '651', 'to': '60', 'title': '25', 'value': '25'},
{'from': '651', 'to': '179', 'title': '25', 'value': '25'},
{'from': '652', 'to': '9', 'title': '38', 'value': '38'},
{'from': '652', 'to': '4', 'title': '36', 'value': '36'},
{'from': '652', 'to': '660', 'title': '35', 'value': '35'},
{'from': '653', 'to': '4', 'title': '54', 'value': '54'},
{'from': '653', 'to': '9', 'title': '36', 'value': '36'},
{'from': '660', 'to': '667', 'title': '94', 'value': '94'},
{'from': '660', 'to': '662', 'title': '71', 'value': '71'},
{'from': '660', 'to': '20', 'title': '64', 'value': '64'},
{'from': '660', 'to': '3', 'title': '58', 'value': '58'},
{'from': '660', 'to': '9', 'title': '57', 'value': '57'},
{'from': '660', 'to': '4', 'title': '55', 'value': '55'},
{'from': '660', 'to': '5', 'title': '46', 'value': '46'},
{'from': '660', 'to': '11', 'title': '39', 'value': '39'},
{'from': '660', 'to': '41', 'title': '37', 'value': '37'},
{'from': '660', 'to': '23', 'title': '35', 'value': '35'},
{'from': '660', 'to': '29', 'title': '34', 'value': '34'},
{'from': '660', 'to': '666', 'title': '33', 'value': '33'},
{'from': '660', 'to': '35', 'title': '32', 'value': '32'},
{'from': '660', 'to': '2', 'title': '32', 'value': '32'},
{'from': '660', 'to': '76', 'title': '30', 'value': '30'},
{'from': '660', 'to': '57', 'title': '30', 'value': '30'},
{'from': '660', 'to': '31', 'title': '26', 'value': '26'},
{'from': '660', 'to': '27', 'title': '26', 'value': '26'},
{'from': '660', 'to': '28', 'title': '25', 'value': '25'},
{'from': '662', 'to': '9', 'title': '137', 'value': '137'},
{'from': '662', 'to': '4', 'title': '56', 'value': '56'},
{'from': '666', 'to': '9', 'title': '204', 'value': '204'},
{'from': '666', 'to': '4', 'title': '138', 'value': '138'},
{'from': '667', 'to': '9', 'title': '138', 'value': '138'},
{'from': '667', 'to': '4', 'title': '117', 'value': '117'},
];
