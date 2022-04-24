// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Id = require("rescript/lib/js/belt_Id.js");
var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Belt_HashMap = require("rescript/lib/js/belt_HashMap.js");
var Caml_exceptions = require("rescript/lib/js/caml_exceptions.js");

var UnSupportedAddressingMode = /* @__PURE__ */Caml_exceptions.create("Instruction.UnSupportedAddressingMode");

var ErrorInstruction = /* @__PURE__ */Caml_exceptions.create("Instruction.ErrorInstruction");

function $$new(bin, code, cycles, mode) {
  var bytes;
  switch (mode) {
    case /* Absolute */5 :
    case /* Absolute_X */6 :
    case /* Absolute_Y */7 :
    case /* Indirect */8 :
        bytes = 3;
        break;
    case /* Immediate */0 :
    case /* Relative */1 :
    case /* ZeroPage */2 :
    case /* ZeroPage_X */3 :
    case /* ZeroPage_Y */4 :
    case /* Indirect_X */9 :
    case /* Indirect_Y */10 :
        bytes = 2;
        break;
    case /* NoneAddressing */11 :
        bytes = 1;
        break;
    
  }
  return [
          bin,
          {
            bin: bin,
            code: code,
            bytes: bytes,
            cycles: cycles,
            mode: mode
          }
        ];
}

function hash(a) {
  return a;
}

var eq = Caml_obj.caml_equal;

var IntHash = Belt_Id.MakeHashable({
      hash: hash,
      eq: eq
    });

var instruction_table = Belt_HashMap.fromArray([
      $$new(0, /* BRK */10, 7, /* NoneAddressing */11),
      $$new(232, /* INX */25, 2, /* NoneAddressing */11),
      $$new(200, /* INY */26, 2, /* NoneAddressing */11),
      $$new(105, /* ADC */0, 2, /* Immediate */0),
      $$new(101, /* ADC */0, 3, /* ZeroPage */2),
      $$new(117, /* ADC */0, 4, /* ZeroPage_X */3),
      $$new(109, /* ADC */0, 4, /* Absolute */5),
      $$new(125, /* ADC */0, 4, /* Absolute_X */6),
      $$new(121, /* ADC */0, 4, /* Absolute_Y */7),
      $$new(97, /* ADC */0, 6, /* Indirect_X */9),
      $$new(113, /* ADC */0, 5, /* Indirect_Y */10),
      $$new(41, /* AND */1, 2, /* Immediate */0),
      $$new(37, /* AND */1, 3, /* ZeroPage */2),
      $$new(53, /* AND */1, 4, /* ZeroPage_X */3),
      $$new(45, /* AND */1, 4, /* Absolute */5),
      $$new(61, /* AND */1, 4, /* Absolute_X */6),
      $$new(57, /* AND */1, 4, /* Absolute_Y */7),
      $$new(33, /* AND */1, 6, /* Indirect_X */9),
      $$new(49, /* AND */1, 5, /* Indirect_Y */10),
      $$new(10, /* ASL */2, 2, /* NoneAddressing */11),
      $$new(6, /* ASL */2, 5, /* ZeroPage */2),
      $$new(22, /* ASL */2, 6, /* ZeroPage_X */3),
      $$new(14, /* ASL */2, 6, /* Absolute */5),
      $$new(30, /* ASL */2, 7, /* Absolute_X */6),
      $$new(144, /* BCC */3, 2, /* Relative */1),
      $$new(176, /* BCS */4, 2, /* Relative */1),
      $$new(240, /* BEQ */5, 2, /* Relative */1),
      $$new(36, /* BIT */6, 3, /* ZeroPage */2),
      $$new(44, /* BIT */6, 4, /* Absolute */5),
      $$new(48, /* BMI */7, 2, /* Relative */1),
      $$new(208, /* BNE */8, 2, /* Relative */1),
      $$new(16, /* BPL */9, 2, /* Relative */1),
      $$new(80, /* BVC */11, 2, /* Relative */1),
      $$new(112, /* BVS */12, 2, /* Relative */1),
      $$new(24, /* CLC */13, 2, /* NoneAddressing */11),
      $$new(216, /* CLD */14, 2, /* NoneAddressing */11),
      $$new(88, /* CLI */15, 2, /* NoneAddressing */11),
      $$new(184, /* CLV */16, 2, /* NoneAddressing */11),
      $$new(201, /* CMP */17, 2, /* Immediate */0),
      $$new(197, /* CMP */17, 3, /* ZeroPage */2),
      $$new(213, /* CMP */17, 4, /* ZeroPage_X */3),
      $$new(205, /* CMP */17, 4, /* Absolute */5),
      $$new(221, /* CMP */17, 4, /* Absolute_X */6),
      $$new(217, /* CMP */17, 4, /* Absolute_Y */7),
      $$new(193, /* CMP */17, 6, /* Indirect_X */9),
      $$new(209, /* CMP */17, 5, /* Indirect_Y */10),
      $$new(224, /* CPX */18, 2, /* Immediate */0),
      $$new(228, /* CPX */18, 3, /* ZeroPage */2),
      $$new(236, /* CPX */18, 4, /* Absolute */5),
      $$new(192, /* CPY */19, 2, /* Immediate */0),
      $$new(196, /* CPY */19, 3, /* ZeroPage */2),
      $$new(204, /* CPY */19, 4, /* Absolute */5),
      $$new(198, /* DEC */20, 5, /* ZeroPage */2),
      $$new(214, /* DEC */20, 6, /* ZeroPage_X */3),
      $$new(206, /* DEC */20, 6, /* Absolute */5),
      $$new(222, /* DEC */20, 7, /* Absolute_X */6),
      $$new(202, /* DEX */21, 2, /* NoneAddressing */11),
      $$new(136, /* DEY */22, 2, /* NoneAddressing */11),
      $$new(73, /* EOR */23, 2, /* Immediate */0),
      $$new(69, /* EOR */23, 3, /* ZeroPage */2),
      $$new(85, /* EOR */23, 4, /* ZeroPage_X */3),
      $$new(77, /* EOR */23, 4, /* Absolute */5),
      $$new(93, /* EOR */23, 4, /* Absolute_X */6),
      $$new(89, /* EOR */23, 4, /* Absolute_Y */7),
      $$new(65, /* EOR */23, 6, /* Indirect_Y */10),
      $$new(81, /* EOR */23, 5, /* Indirect_Y */10),
      $$new(230, /* INC */24, 5, /* ZeroPage */2),
      $$new(246, /* INC */24, 6, /* ZeroPage_X */3),
      $$new(238, /* INC */24, 6, /* Absolute */5),
      $$new(254, /* INC */24, 7, /* Absolute_X */6),
      $$new(232, /* INX */25, 2, /* NoneAddressing */11),
      $$new(200, /* INY */26, 2, /* NoneAddressing */11),
      $$new(76, /* JMP */27, 3, /* Absolute */5),
      $$new(108, /* JMP */27, 5, /* Indirect */8),
      $$new(32, /* JSR */28, 6, /* Absolute */5),
      $$new(169, /* LDA */29, 2, /* Immediate */0),
      $$new(165, /* LDA */29, 3, /* ZeroPage */2),
      $$new(181, /* LDA */29, 4, /* ZeroPage_X */3),
      $$new(173, /* LDA */29, 4, /* Absolute */5),
      $$new(189, /* LDA */29, 4, /* Absolute_X */6),
      $$new(185, /* LDA */29, 4, /* Absolute_Y */7),
      $$new(161, /* LDA */29, 6, /* Indirect_X */9),
      $$new(177, /* LDA */29, 5, /* Indirect_Y */10),
      $$new(162, /* LDX */30, 2, /* Immediate */0),
      $$new(166, /* LDX */30, 3, /* ZeroPage */2),
      $$new(182, /* LDX */30, 4, /* ZeroPage_Y */4),
      $$new(174, /* LDX */30, 4, /* Absolute */5),
      $$new(190, /* LDX */30, 4, /* Absolute_Y */7),
      $$new(160, /* LDY */31, 2, /* Immediate */0),
      $$new(164, /* LDY */31, 3, /* ZeroPage */2),
      $$new(180, /* LDY */31, 4, /* ZeroPage_Y */4),
      $$new(172, /* LDY */31, 4, /* Absolute */5),
      $$new(188, /* LDY */31, 4, /* Absolute_Y */7),
      $$new(74, /* LSR */32, 2, /* NoneAddressing */11),
      $$new(70, /* LSR */32, 5, /* ZeroPage */2),
      $$new(86, /* LSR */32, 6, /* ZeroPage_X */3),
      $$new(78, /* LSR */32, 6, /* Absolute */5),
      $$new(94, /* LSR */32, 7, /* Absolute_X */6),
      $$new(234, /* NOP */33, 2, /* NoneAddressing */11),
      $$new(9, /* ORA */34, 2, /* Immediate */0),
      $$new(5, /* ORA */34, 3, /* ZeroPage */2),
      $$new(21, /* ORA */34, 4, /* ZeroPage_X */3),
      $$new(13, /* ORA */34, 4, /* Absolute */5),
      $$new(29, /* ORA */34, 4, /* Absolute_X */6),
      $$new(25, /* ORA */34, 4, /* Absolute_Y */7),
      $$new(1, /* ORA */34, 6, /* Indirect_X */9),
      $$new(17, /* ORA */34, 5, /* Indirect_Y */10),
      $$new(72, /* PHA */35, 3, /* NoneAddressing */11),
      $$new(8, /* PHP */36, 3, /* NoneAddressing */11),
      $$new(104, /* PLA */37, 4, /* NoneAddressing */11),
      $$new(40, /* ROL */39, 2, /* NoneAddressing */11),
      $$new(42, /* ROL */39, 5, /* ZeroPage */2),
      $$new(38, /* ROL */39, 6, /* ZeroPage_X */3),
      $$new(54, /* ROL */39, 6, /* Absolute */5),
      $$new(46, /* ROL */39, 7, /* Absolute_X */6),
      $$new(106, /* ROR */40, 2, /* NoneAddressing */11),
      $$new(102, /* ROR */40, 5, /* ZeroPage */2),
      $$new(118, /* ROR */40, 6, /* ZeroPage_X */3),
      $$new(110, /* ROR */40, 6, /* Absolute */5),
      $$new(126, /* ROR */40, 7, /* Absolute_X */6),
      $$new(64, /* RTI */41, 6, /* NoneAddressing */11),
      $$new(96, /* RTS */42, 6, /* NoneAddressing */11),
      $$new(249, /* SBC */43, 4, /* Immediate */0),
      $$new(233, /* SBC */43, 2, /* ZeroPage */2),
      $$new(229, /* SBC */43, 3, /* ZeroPage_X */3),
      $$new(245, /* SBC */43, 4, /* Absolute */5),
      $$new(237, /* SBC */43, 4, /* Absolute_X */6),
      $$new(253, /* SBC */43, 4, /* Absolute_Y */7),
      $$new(225, /* SBC */43, 6, /* Indirect_X */9),
      $$new(241, /* SBC */43, 5, /* Indirect_Y */10),
      $$new(56, /* SEC */44, 2, /* NoneAddressing */11),
      $$new(248, /* SED */45, 2, /* NoneAddressing */11),
      $$new(120, /* SEI */46, 2, /* NoneAddressing */11),
      $$new(133, /* STA */47, 3, /* ZeroPage */2),
      $$new(149, /* STA */47, 4, /* ZeroPage_X */3),
      $$new(141, /* STA */47, 4, /* Absolute */5),
      $$new(157, /* STA */47, 5, /* Absolute_X */6),
      $$new(153, /* STA */47, 5, /* Absolute_Y */7),
      $$new(129, /* STA */47, 6, /* Indirect_X */9),
      $$new(145, /* STA */47, 6, /* Indirect_Y */10),
      $$new(134, /* STX */48, 3, /* ZeroPage */2),
      $$new(150, /* STX */48, 4, /* ZeroPage_Y */4),
      $$new(142, /* STX */48, 4, /* Absolute */5),
      $$new(134, /* STY */49, 3, /* ZeroPage */2),
      $$new(150, /* STY */49, 4, /* ZeroPage_X */3),
      $$new(142, /* STY */49, 4, /* Absolute */5),
      $$new(170, /* TAX */50, 2, /* NoneAddressing */11),
      $$new(168, /* TAY */51, 2, /* NoneAddressing */11),
      $$new(138, /* TXA */53, 2, /* NoneAddressing */11),
      $$new(154, /* TXS */54, 2, /* NoneAddressing */11),
      $$new(152, /* TYA */55, 2, /* NoneAddressing */11)
    ], IntHash);

exports.UnSupportedAddressingMode = UnSupportedAddressingMode;
exports.ErrorInstruction = ErrorInstruction;
exports.$$new = $$new;
exports.IntHash = IntHash;
exports.instruction_table = instruction_table;
/* IntHash Not a pure module */
