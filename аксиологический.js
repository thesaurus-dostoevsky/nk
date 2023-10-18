var nodes = [{'id': '70', 'label': 'система', 'title': 'Философский и др. дискурсы, 169', 'value': '1', 'group': '3', 'shape': 'triangle'},
{'id': '15', 'label': 'творчество', 'title': 'Литературоведение, 1497', 'value': '1', 'group': '3', 'shape': 'diamond'},
{'id': '17', 'label': 'русский литература', 'title': 'Литературоведение, 1592', 'value': '1', 'group': '9', 'shape': 'diamond'},
{'id': '429', 'label': 'аксиологический', 'title': 'Философский и др. дискурсы, 92', 'value': '1', 'shape': 'triangle', 'font': {'strokeWidth': 10, 'strokeColor': '#ffffff'}},
];
var edges = [{'from': '15', 'to': '24', 'title': '51', 'value': '51'},
{'from': '9', 'to': '17', 'title': '7', 'value': '7'},
{'from': '15', 'to': '228', 'title': '12', 'value': '12'},
{'from': '3', 'to': '15', 'title': '38', 'value': '38'},
{'from': '15', 'to': '14', 'title': '141', 'value': '141'},
{'from': '19', 'to': '15', 'title': '100', 'value': '100'},
{'from': '47', 'to': '15', 'title': '8', 'value': '8'},
{'from': '28', 'to': '15', 'title': '47', 'value': '47'},
{'from': '2', 'to': '15', 'title': '48', 'value': '48'},
{'from': '5', 'to': '15', 'title': '78', 'value': '78'},
{'from': '15', 'to': '53', 'title': '15', 'value': '15'},
{'from': '15', 'to': '11', 'title': '12', 'value': '12'},
{'from': '13', 'to': '15', 'title': '52', 'value': '52'},
{'from': '58', 'to': '15', 'title': '6', 'value': '6'},
{'from': '19', 'to': '17', 'title': '166', 'value': '166'},
{'from': '88', 'to': '15', 'title': '26', 'value': '26'},
{'from': '15', 'to': '78', 'title': '36', 'value': '36'},
{'from': '337', 'to': '15', 'title': '6', 'value': '6'},
{'from': '4', 'to': '15', 'title': '67', 'value': '67'},
{'from': '18', 'to': '15', 'title': '29', 'value': '29'},
{'from': '8', 'to': '70', 'title': '20', 'value': '20'},
{'from': '21', 'to': '15', 'title': '42', 'value': '42'},
{'from': '70', 'to': '21', 'title': '11', 'value': '11'},
{'from': '70', 'to': '51', 'title': '21', 'value': '21'},
{'from': '70', 'to': '89', 'title': '16', 'value': '16'},
{'from': '179', 'to': '15', 'title': '13', 'value': '13'},
{'from': '23', 'to': '15', 'title': '14', 'value': '14'},
{'from': '15', 'to': '35', 'title': '9', 'value': '9'},
{'from': '69', 'to': '15', 'title': '19', 'value': '19'},
{'from': '91', 'to': '15', 'title': '20', 'value': '20'},
{'from': '15', 'to': '38', 'title': '14', 'value': '14'},
{'from': '9', 'to': '15', 'title': '18', 'value': '18'},
{'from': '287', 'to': '15', 'title': '7', 'value': '7'},
{'from': '183', 'to': '15', 'title': '6', 'value': '6'},
{'from': '15', 'to': '77', 'title': '21', 'value': '21'},
{'from': '15', 'to': '7', 'title': '30', 'value': '30'},
{'from': '15', 'to': '55', 'title': '7', 'value': '7'},
{'from': '2', 'to': '17', 'title': '24', 'value': '24'},
{'from': '17', 'to': '26', 'title': '32', 'value': '32'},
{'from': '10', 'to': '70', 'title': '10', 'value': '10'},
{'from': '17', 'to': '24', 'title': '14', 'value': '14'},
{'from': '25', 'to': '15', 'title': '47', 'value': '47'},
{'from': '17', 'to': '7', 'title': '38', 'value': '38'},
{'from': '361', 'to': '17', 'title': '11', 'value': '11'},
{'from': '2', 'to': '70', 'title': '38', 'value': '38'},
{'from': '10', 'to': '15', 'title': '58', 'value': '58'},
{'from': '122', 'to': '15', 'title': '12', 'value': '12'},
{'from': '122', 'to': '17', 'title': '7', 'value': '7'},
{'from': '18', 'to': '17', 'title': '23', 'value': '23'},
{'from': '94', 'to': '17', 'title': '23', 'value': '23'},
{'from': '118', 'to': '17', 'title': '12', 'value': '12'},
{'from': '1', 'to': '17', 'title': '39', 'value': '39'},
{'from': '429', 'to': '15', 'title': '6', 'value': '6'},
{'from': '95', 'to': '15', 'title': '25', 'value': '25'},
{'from': '5', 'to': '17', 'title': '67', 'value': '67'},
{'from': '17', 'to': '80', 'title': '73', 'value': '73'},
{'from': '82', 'to': '15', 'title': '10', 'value': '10'},
{'from': '242', 'to': '15', 'title': '5', 'value': '5'},
{'from': '17', 'to': '51', 'title': '7', 'value': '7'},
{'from': '69', 'to': '17', 'title': '24', 'value': '24'},
{'from': '6', 'to': '17', 'title': '44', 'value': '44'},
{'from': '22', 'to': '17', 'title': '30', 'value': '30'},
{'from': '148', 'to': '17', 'title': '7', 'value': '7'},
{'from': '1', 'to': '15', 'title': '58', 'value': '58'},
{'from': '15', 'to': '36', 'title': '17', 'value': '17'},
{'from': '1', 'to': '70', 'title': '25', 'value': '25'},
{'from': '8', 'to': '15', 'title': '76', 'value': '76'},
{'from': '16', 'to': '17', 'title': '68', 'value': '68'},
{'from': '17', 'to': '4', 'title': '54', 'value': '54'},
{'from': '150', 'to': '70', 'title': '11', 'value': '11'},
{'from': '70', 'to': '119', 'title': '7', 'value': '7'},
{'from': '70', 'to': '91', 'title': '8', 'value': '8'},
{'from': '17', 'to': '49', 'title': '10', 'value': '10'},
{'from': '181', 'to': '15', 'title': '10', 'value': '10'},
{'from': '164', 'to': '15', 'title': '10', 'value': '10'},
{'from': '10', 'to': '17', 'title': '68', 'value': '68'},
{'from': '179', 'to': '17', 'title': '13', 'value': '13'},
{'from': '15', 'to': '49', 'title': '14', 'value': '14'},
{'from': '25', 'to': '17', 'title': '25', 'value': '25'},
{'from': '29', 'to': '17', 'title': '6', 'value': '6'},
{'from': '33', 'to': '15', 'title': '28', 'value': '28'},
{'from': '17', 'to': '15', 'title': '46', 'value': '46'},
{'from': '171', 'to': '15', 'title': '10', 'value': '10'},
{'from': '342', 'to': '17', 'title': '5', 'value': '5'},
{'from': '95', 'to': '17', 'title': '24', 'value': '24'},
{'from': '171', 'to': '17', 'title': '6', 'value': '6'},
{'from': '8', 'to': '17', 'title': '34', 'value': '34'},
{'from': '68', 'to': '15', 'title': '5', 'value': '5'},
{'from': '15', 'to': '51', 'title': '36', 'value': '36'},
{'from': '41', 'to': '15', 'title': '20', 'value': '20'},
{'from': '88', 'to': '70', 'title': '9', 'value': '9'},
{'from': '28', 'to': '70', 'title': '12', 'value': '12'},
{'from': '328', 'to': '17', 'title': '15', 'value': '15'},
{'from': '178', 'to': '17', 'title': '62', 'value': '62'},
{'from': '48', 'to': '17', 'title': '99', 'value': '99'},
{'from': '72', 'to': '17', 'title': '142', 'value': '142'},
{'from': '17', 'to': '73', 'title': '92', 'value': '92'},
{'from': '84', 'to': '17', 'title': '83', 'value': '83'},
{'from': '15', 'to': '89', 'title': '16', 'value': '16'},
{'from': '15', 'to': '80', 'title': '12', 'value': '12'},
{'from': '40', 'to': '15', 'title': '36', 'value': '36'},
{'from': '16', 'to': '70', 'title': '20', 'value': '20'},
{'from': '431', 'to': '15', 'title': '10', 'value': '10'},
{'from': '83', 'to': '17', 'title': '19', 'value': '19'},
{'from': '15', 'to': '180', 'title': '7', 'value': '7'},
{'from': '17', 'to': '183', 'title': '5', 'value': '5'},
{'from': '44', 'to': '15', 'title': '24', 'value': '24'},
{'from': '15', 'to': '26', 'title': '45', 'value': '45'},
{'from': '70', 'to': '36', 'title': '11', 'value': '11'},
{'from': '43', 'to': '15', 'title': '18', 'value': '18'},
{'from': '165', 'to': '17', 'title': '6', 'value': '6'},
{'from': '17', 'to': '55', 'title': '6', 'value': '6'},
{'from': '17', 'to': '36', 'title': '13', 'value': '13'},
{'from': '54', 'to': '17', 'title': '13', 'value': '13'},
{'from': '34', 'to': '17', 'title': '36', 'value': '36'},
{'from': '17', 'to': '353', 'title': '7', 'value': '7'},
{'from': '17', 'to': '14', 'title': '30', 'value': '30'},
{'from': '70', 'to': '49', 'title': '9', 'value': '9'},
{'from': '70', 'to': '104', 'title': '8', 'value': '8'},
{'from': '176', 'to': '70', 'title': '5', 'value': '5'},
{'from': '5', 'to': '70', 'title': '6', 'value': '6'},
{'from': '156', 'to': '70', 'title': '15', 'value': '15'},
{'from': '156', 'to': '17', 'title': '6', 'value': '6'},
{'from': '17', 'to': '70', 'title': '5', 'value': '5'},
{'from': '16', 'to': '15', 'title': '30', 'value': '30'},
{'from': '94', 'to': '15', 'title': '10', 'value': '10'},
{'from': '54', 'to': '15', 'title': '8', 'value': '8'},
{'from': '17', 'to': '17', 'title': '38', 'value': '38'},
{'from': '45', 'to': '17', 'title': '49', 'value': '49'},
{'from': '17', 'to': '526', 'title': '23', 'value': '23'},
{'from': '17', 'to': '130', 'title': '18', 'value': '18'},
{'from': '40', 'to': '17', 'title': '9', 'value': '9'},
{'from': '82', 'to': '17', 'title': '31', 'value': '31'},
{'from': '17', 'to': '225', 'title': '9', 'value': '9'},
{'from': '135', 'to': '17', 'title': '5', 'value': '5'},
{'from': '120', 'to': '17', 'title': '9', 'value': '9'},
{'from': '100', 'to': '70', 'title': '6', 'value': '6'},
{'from': '431', 'to': '70', 'title': '5', 'value': '5'},
{'from': '70', 'to': '116', 'title': '33', 'value': '33'},
{'from': '232', 'to': '15', 'title': '23', 'value': '23'},
{'from': '70', 'to': '15', 'title': '13', 'value': '13'},
{'from': '29', 'to': '70', 'title': '10', 'value': '10'},
{'from': '29', 'to': '15', 'title': '32', 'value': '32'},
{'from': '156', 'to': '15', 'title': '7', 'value': '7'},
{'from': '32', 'to': '15', 'title': '47', 'value': '47'},
{'from': '124', 'to': '15', 'title': '7', 'value': '7'},
{'from': '32', 'to': '17', 'title': '11', 'value': '11'},
{'from': '17', 'to': '91', 'title': '10', 'value': '10'},
{'from': '70', 'to': '12', 'title': '15', 'value': '15'},
{'from': '9', 'to': '70', 'title': '6', 'value': '6'},
{'from': '101', 'to': '17', 'title': '5', 'value': '5'},
{'from': '518', 'to': '17', 'title': '6', 'value': '6'},
{'from': '28', 'to': '17', 'title': '24', 'value': '24'},
{'from': '75', 'to': '17', 'title': '10', 'value': '10'},
{'from': '17', 'to': '30', 'title': '41', 'value': '41'},
{'from': '131', 'to': '17', 'title': '12', 'value': '12'},
{'from': '48', 'to': '15', 'title': '24', 'value': '24'},
{'from': '60', 'to': '15', 'title': '39', 'value': '39'},
{'from': '70', 'to': '35', 'title': '5', 'value': '5'},
{'from': '3', 'to': '70', 'title': '25', 'value': '25'},
{'from': '119', 'to': '15', 'title': '8', 'value': '8'},
{'from': '72', 'to': '15', 'title': '6', 'value': '6'},
{'from': '17', 'to': '134', 'title': '27', 'value': '27'},
{'from': '150', 'to': '17', 'title': '11', 'value': '11'},
{'from': '17', 'to': '89', 'title': '7', 'value': '7'},
{'from': '43', 'to': '17', 'title': '7', 'value': '7'},
{'from': '15', 'to': '134', 'title': '11', 'value': '11'},
{'from': '83', 'to': '15', 'title': '11', 'value': '11'},
{'from': '17', 'to': '12', 'title': '40', 'value': '40'},
{'from': '133', 'to': '17', 'title': '10', 'value': '10'},
{'from': '17', 'to': '127', 'title': '7', 'value': '7'},
{'from': '133', 'to': '15', 'title': '8', 'value': '8'},
{'from': '193', 'to': '15', 'title': '6', 'value': '6'},
{'from': '13', 'to': '17', 'title': '15', 'value': '15'},
{'from': '34', 'to': '15', 'title': '22', 'value': '22'},
{'from': '15', 'to': '15', 'title': '13', 'value': '13'},
{'from': '15', 'to': '12', 'title': '43', 'value': '43'},
{'from': '126', 'to': '15', 'title': '11', 'value': '11'},
{'from': '195', 'to': '17', 'title': '21', 'value': '21'},
{'from': '507', 'to': '17', 'title': '7', 'value': '7'},
{'from': '110', 'to': '15', 'title': '7', 'value': '7'},
{'from': '113', 'to': '15', 'title': '8', 'value': '8'},
{'from': '62', 'to': '15', 'title': '9', 'value': '9'},
{'from': '120', 'to': '15', 'title': '16', 'value': '16'},
{'from': '228', 'to': '15', 'title': '7', 'value': '7'},
{'from': '234', 'to': '15', 'title': '6', 'value': '6'},
{'from': '39', 'to': '15', 'title': '7', 'value': '7'},
{'from': '258', 'to': '15', 'title': '5', 'value': '5'},
{'from': '17', 'to': '191', 'title': '6', 'value': '6'},
{'from': '6', 'to': '15', 'title': '37', 'value': '37'},
{'from': '20', 'to': '17', 'title': '12', 'value': '12'},
{'from': '20', 'to': '15', 'title': '13', 'value': '13'},
{'from': '3', 'to': '17', 'title': '13', 'value': '13'},
{'from': '70', 'to': '4', 'title': '10', 'value': '10'},
{'from': '15', 'to': '191', 'title': '6', 'value': '6'},
{'from': '27', 'to': '17', 'title': '7', 'value': '7'},
{'from': '233', 'to': '70', 'title': '18', 'value': '18'},
{'from': '64', 'to': '15', 'title': '5', 'value': '5'},
{'from': '15', 'to': '116', 'title': '6', 'value': '6'},
{'from': '239', 'to': '15', 'title': '7', 'value': '7'},
{'from': '22', 'to': '15', 'title': '29', 'value': '29'},
{'from': '70', 'to': '7', 'title': '21', 'value': '21'},
{'from': '27', 'to': '70', 'title': '11', 'value': '11'},
{'from': '115', 'to': '15', 'title': '6', 'value': '6'},
{'from': '70', 'to': '14', 'title': '48', 'value': '48'},
{'from': '70', 'to': '30', 'title': '13', 'value': '13'},
{'from': '306', 'to': '15', 'title': '7', 'value': '7'},
{'from': '30', 'to': '15', 'title': '7', 'value': '7'},
{'from': '385', 'to': '70', 'title': '7', 'value': '7'},
{'from': '70', 'to': '70', 'title': '11', 'value': '11'},
{'from': '68', 'to': '17', 'title': '5', 'value': '5'},
{'from': '44', 'to': '17', 'title': '12', 'value': '12'},
{'from': '40', 'to': '70', 'title': '5', 'value': '5'},
{'from': '70', 'to': '80', 'title': '5', 'value': '5'},
{'from': '507', 'to': '15', 'title': '5', 'value': '5'},
{'from': '31', 'to': '15', 'title': '9', 'value': '9'},
{'from': '286', 'to': '15', 'title': '8', 'value': '8'},
{'from': '17', 'to': '77', 'title': '14', 'value': '14'},
{'from': '17', 'to': '66', 'title': '7', 'value': '7'},
{'from': '100', 'to': '17', 'title': '8', 'value': '8'},
{'from': '184', 'to': '15', 'title': '5', 'value': '5'},
{'from': '22', 'to': '70', 'title': '12', 'value': '12'},
{'from': '33', 'to': '70', 'title': '10', 'value': '10'},
{'from': '13', 'to': '70', 'title': '15', 'value': '15'},
{'from': '25', 'to': '70', 'title': '8', 'value': '8'},
{'from': '120', 'to': '70', 'title': '5', 'value': '5'},
{'from': '100', 'to': '15', 'title': '9', 'value': '9'},
{'from': '6', 'to': '70', 'title': '17', 'value': '17'},
{'from': '46', 'to': '15', 'title': '12', 'value': '12'},
{'from': '429', 'to': '70', 'title': '7', 'value': '7'},
{'from': '15', 'to': '74', 'title': '6', 'value': '6'},
{'from': '17', 'to': '74', 'title': '5', 'value': '5'},
{'from': '17', 'to': '38', 'title': '15', 'value': '15'},
{'from': '15', 'to': '225', 'title': '5', 'value': '5'},
{'from': '33', 'to': '17', 'title': '19', 'value': '19'},
{'from': '60', 'to': '17', 'title': '9', 'value': '9'},
{'from': '17', 'to': '99', 'title': '6', 'value': '6'},
{'from': '181', 'to': '17', 'title': '24', 'value': '24'},
{'from': '37', 'to': '15', 'title': '5', 'value': '5'},
{'from': '27', 'to': '15', 'title': '13', 'value': '13'},
{'from': '61', 'to': '15', 'title': '6', 'value': '6'},
{'from': '70', 'to': '24', 'title': '7', 'value': '7'},
{'from': '37', 'to': '70', 'title': '6', 'value': '6'},
{'from': '90', 'to': '15', 'title': '10', 'value': '10'},
{'from': '148', 'to': '15', 'title': '9', 'value': '9'},
{'from': '17', 'to': '116', 'title': '8', 'value': '8'},
{'from': '17', 'to': '85', 'title': '6', 'value': '6'},
{'from': '118', 'to': '15', 'title': '11', 'value': '11'},
{'from': '70', 'to': '368', 'title': '6', 'value': '6'},
{'from': '112', 'to': '17', 'title': '18', 'value': '18'},
{'from': '39', 'to': '17', 'title': '5', 'value': '5'},
{'from': '350', 'to': '15', 'title': '6', 'value': '6'},
{'from': '15', 'to': '353', 'title': '13', 'value': '13'},
{'from': '17', 'to': '11', 'title': '7', 'value': '7'},
{'from': '139', 'to': '15', 'title': '7', 'value': '7'},
{'from': '15', 'to': '125', 'title': '10', 'value': '10'},
{'from': '192', 'to': '15', 'title': '6', 'value': '6'},
{'from': '216', 'to': '15', 'title': '7', 'value': '7'},
{'from': '214', 'to': '17', 'title': '9', 'value': '9'},
{'from': '522', 'to': '15', 'title': '6', 'value': '6'},
{'from': '453', 'to': '17', 'title': '6', 'value': '6'},
{'from': '394', 'to': '70', 'title': '6', 'value': '6'},
{'from': '45', 'to': '70', 'title': '9', 'value': '9'},
{'from': '428', 'to': '17', 'title': '6', 'value': '6'},
{'from': '82', 'to': '70', 'title': '13', 'value': '13'},
{'from': '179', 'to': '70', 'title': '12', 'value': '12'},
{'from': '34', 'to': '70', 'title': '8', 'value': '8'},
{'from': '126', 'to': '17', 'title': '8', 'value': '8'},
{'from': '70', 'to': '26', 'title': '6', 'value': '6'},
{'from': '64', 'to': '17', 'title': '6', 'value': '6'},
{'from': '17', 'to': '53', 'title': '17', 'value': '17'},
{'from': '188', 'to': '17', 'title': '15', 'value': '15'},
{'from': '216', 'to': '17', 'title': '7', 'value': '7'},
{'from': '88', 'to': '17', 'title': '6', 'value': '6'},
{'from': '428', 'to': '15', 'title': '5', 'value': '5'},
{'from': '45', 'to': '15', 'title': '18', 'value': '18'},
{'from': '110', 'to': '17', 'title': '12', 'value': '12'},
{'from': '522', 'to': '17', 'title': '5', 'value': '5'},
{'from': '574', 'to': '17', 'title': '6', 'value': '6'},
{'from': '19', 'to': '70', 'title': '5', 'value': '5'},
{'from': '429', 'to': '17', 'title': '7', 'value': '7'},
{'from': '192', 'to': '70', 'title': '5', 'value': '5'},
{'from': '135', 'to': '15', 'title': '8', 'value': '8'},
{'from': '457', 'to': '15', 'title': '8', 'value': '8'},
{'from': '66', 'to': '15', 'title': '7', 'value': '7'},
{'from': '70', 'to': '128', 'title': '6', 'value': '6'},
{'from': '15', 'to': '218', 'title': '7', 'value': '7'},
{'from': '41', 'to': '17', 'title': '5', 'value': '5'},
{'from': '540', 'to': '17', 'title': '5', 'value': '5'},
{'from': '17', 'to': '137', 'title': '6', 'value': '6'},
{'from': '476', 'to': '70', 'title': '5', 'value': '5'},
{'from': '17', 'to': '21', 'title': '5', 'value': '5'},
{'from': '17', 'to': '174', 'title': '5', 'value': '5'},
{'from': '242', 'to': '17', 'title': '8', 'value': '8'},
{'from': '17', 'to': '90', 'title': '7', 'value': '7'},
{'from': '173', 'to': '70', 'title': '6', 'value': '6'},
{'from': '139', 'to': '17', 'title': '5', 'value': '5'},
{'from': '15', 'to': '50', 'title': '8', 'value': '8'},
{'from': '70', 'to': '11', 'title': '5', 'value': '5'},
{'from': '149', 'to': '15', 'title': '5', 'value': '5'},
{'from': '17', 'to': '42', 'title': '10', 'value': '10'},
{'from': '62', 'to': '70', 'title': '7', 'value': '7'},
{'from': '47', 'to': '70', 'title': '6', 'value': '6'},
{'from': '70', 'to': '228', 'title': '5', 'value': '5'},
{'from': '76', 'to': '70', 'title': '5', 'value': '5'},
];
