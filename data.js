// 论文、新闻等内容在这里修改。保留引号、逗号和括号。
const DATA = {
  "pubs": [
      {
         "year": "2026",
         "html": "Zhang Hu, Ming Yan, Yinshui Xia, Lunyao Wang and <A\n\t          href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"LV-RM3: Logic Synthesis and Verification of Computing-in-Memory Systems Using 3-Input Resistive Majority Gates\", <i>ACM Journal on Emerging Technologies in Computing Systems\n     </i>, <strong>JETC</strong>, Oct. 2026, accepted for publication."
     },
    {
      "year": "2026",
      "html": "Zhang Hu, Wentao Jiang, Chengyu Ma, Yinshui Xia, Lunyao Wang, and <A\n          href=\"https://zfchu.github.io/\">Zhufei Chu</a>,  \"VeLoR: Verification-Oriented Logic Representation and Parallel Solving for Combinational Equivalence Checking\", <strong> ICCAD' 26</strong>, \n\t   <i>International Conference on Computer-Aided Design</i>, San Jose, USA, Nov. 2026."
    },
    {
      "year": "2026",
      "html": "Zhengyuan Shi, Jingxin Wang, Wentao Jiang, Chengyu Ma, Ziyang Zheng, <A\n          href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Weikang Qian, and Qiang Xu, \"Alignment Unlocks Complementarity: A Framework for Multiview Circuit Representation Learning\", <strong> ICCAD' 26</strong>, \n\t   <i>International Conference on Computer-Aided Design</i>, San Jose, USA, Nov. 2026."
    },
    {
      "year": "2026",
      "html": "Zhang Hu, Yinshui Xia, Lunyao Wang, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"VeLoR: Verification-Oriented Logic Representation and Parallel Solving for Combinational Equivalence Checking\", <strong> IWLS'26</strong>, <i>International Workshop on Logic & Synthesis</i>, May 2026, Hong Kong, China."
    },
    {
      "year": "2026",
      "html": "Chengyu Ma, Yinshui Xia, Lunyao Wang, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"Area-Oriented MFFW-based Refactoring for LUTNetworks\", <strong> IWLS'26</strong>, <i>International Workshop on Logic & Synthesis</i>, May 2026, Hong Kong, China."
    },
    {
      "year": "2026",
      "html": "Yanzhen Wang, Chen Lv, Yinshui Xia, Lunyao Wang, and Zhufei Chu, \"Technology-Aware Resubstitution via Functional Reconstruction\", <strong> IWLS'26</strong>, <i>International Workshop on Logic & Synthesis</i>, May 2026, Hong Kong, China."
    },
    {
      "year": "2026",
      "html": "Yitian Fei, Chengyu Ma, Yinshui Xia, Lunyao Wang, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"Post-Mapping Optimization Method for RSFQ Circuits Based on Path Balancing\",  <strong> IWLS'26</strong>, <i>International Workshop on Logic & Synthesis</i>, May 2026, Hong Kong, China."
    },
    {
      "year": "2026",
      "html": "Wentao Jiang, Jingxin Wang, Zhang hu, Zhengyuan shi, Chengyu Ma, Qiang Xu, Weikang Qian, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"GNN-based Path-aware multi-view circuit learning for technology mapping\", <strong> IWLS'26</strong>, <i>International Workshop on Logic & Synthesis</i>, May 2026, Hong Kong, China."
    },
    {
      "year": "2026",
      "html": "Qianhuo Wu, Xiunan Sun, Lunyao Wang, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"FeSyn: BDD-based Logic Synthesis Approach Utilizing Ferroelectric Field-Effect Transistor Multiplexer\",  <strong> IWLS'26</strong>, <i>International Workshop on Logic & Synthesis</i>, May 2026, Hong Kong, China."
    },
    {
      "year": "2026",
      "html": "Yanzhen Wang, Zhang Hu, Jingning Yu, Chengyu Ma, Yinshui Xia, Lunyao Wang, and <A\n\t           href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\"STP-Based Combinational Equivalence Checking for Ternary Logic Synthesis\", <strong> ISEDA'26</strong>, <i>IEEE International Symposium of EDA</i>, May 2026, Singapore."
    },
    {
      "year": "2026",
      "html": "Yulin Chen, Zhang Hu, Chengyu Ma, Yinshui Xia, Lunyao Wang, and <A\n\t           href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"Efficient Majority-Based Resubstitution via Two-Step Filtering\", <strong> ISEDA'26</strong>, <i>IEEE International Symposium of EDA</i>, May 2026, Singapore."
    },
    {
      "year": "2026",
      "html": "Junjie Xu, Zhang Hu, Yinshui Xia, Lunyao Wang, and <A\n\t           href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\"Efficient SAT Sweeping via Direct Circuit-Based SAT Solving\", <strong> ISEDA'26</strong>, <i>IEEE International Symposium of EDA</i>, May 2026, Singapore."
    },
    {
      "year": "2026",
      "html": "Qiangqiang Hu, Zhang Hu, Yinshui Xia, Lunyao Wang, and <A\n\t           href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"Timing-Oriented DFF and Splitter Refinement for RSFQ Circuits\", <strong> ISEDA'26</strong>, <i>IEEE International Symposium of EDA</i>, May 2026, Singapore."
    },
    {
      "year": "2026",
      "html": "Jiaxiang Pan, Yinshui Xia, Lunyao Wang, and <A href=\"https://zfchu.github.io\">Zhufei Chu</a>, \"<A href=\"https://ieeexplore.ieee.org/document/11340701\">LV-MAGIC: Logic Synthesis and Verification for MAGIC based In-Memory Computing</a>\",  <i> IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems\n      </i>, <strong>TCAD</strong>, Early Access, doi: 10.1109/TCAD.2026.3652093."
    },
    {
      "year": "2026",
      "html": "Qiyao He, Zhang Hu, Yinshui Xia, Lunyao Wang, and <A\n\t          href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"<A href=\"https://www.sciencedirect.com/science/article/abs/pii/S0167926025002378\">Enhancing Logic Optimization of Alliance Tool based on Directed Acyclic Graphs</a> \", <i>Integration, the VLSI Journal </i>,  Volume 106, January 2026, 102580."
    },
    {
      "year": "2026",
      "html": "Lingfeng Zhou, Yilong Zhou, Hao Gong, Zhengyuan Shi, Qiang Xu, <A\n          href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Yue Wu, and Xiaoyan\n        Yang, \"DeepCut: Structure-Aware GNN Framework for Efficient Cut Timing\n        Prediction in Logic Synthesis\", <strong> ASPDAC'26</strong>, \n\t   <i>Asia and South Pacific Design Automation Conference</i>, Hongkong, China, Jan. 2026."
    },
    {
      "year": "2025",
      "html": "Hongyang Pan, Sen Liu, Yong Xiao, Yun Shao, Keren Zhu, Fan Yang, Xuan Zeng and <A\n\t          href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"<A href=\"https://dl.acm.org/doi/full/10.1145/3749103\">Rethinking Logic Rewriting: Technology-Aware Subgraph Matching with Exact Synthesis</a>\", <i>ACM Transactions on Design Automation of Electronic Systems\n     </i>, <strong>TODAES</strong>, August 2025, 30(5): 77:1-77:29."
    },
    {
      "year": "2025",
      "html": "Tingting Liu and <A\n\t          href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"<A href=\"https://www.sciencedirect.com/science/article/abs/pii/S1879239125000025\">Implication logic synthesis and optimization methods for memristor-based logic circuits</a>\", <i>Microelectronics Journal</i>, March 2025, 157: 106553."
    },
    {
      "year": "2025",
      "html": "Zhengyuan Shi, Chengyu Ma, Ziyang Zheng, Lingfeng Zhou, Hongyang Pan, Wentao Jiang, Fan Yang, Xiaoyan Yang, <A\n\t          href=\"https://zfchu.github.io/\">Zhufei Chu</a>, and Qiang Xu, \"DeepCell: Self-Supervised Multiview Fusion for Circuit Representation Learning\", <strong> ICCAD' 25</strong>, \n\t\t   <i>International Conference on Computer-Aided Design</i>, Munich, Germany, Oct. 2025."
    },
    {
      "year": "2025",
      "html": "Zhengyuan Shi, Wentao Jiang, Xindi Zhang, Jin Luo, Yun Liang, <A\n\t          href=\"https://zfchu.github.io/\">Zhufei Chu</a>, and Qiang Xu, \"<A href=\"https://drops.dagstuhl.de/storage/00lipics/lipics-vol340-cp2025/LIPIcs.CP.2025.34/LIPIcs.CP.2025.34.pdf\">DynamicSAT: Dynamic Configuration Tuning for SAT Solving</a>\", <strong> CP' 25</strong>, \n\t\t   <i>The 31st International Conference on Principles and Practice of Constraint Programming</i>, Glasgow, Scotland, Aug. 2025."
    },
    {
      "year": "2025",
      "html": "Zeju Li, Changran Xu, Zhengyuan Shi, Zedong Peng, Yi Liu, Yunhao Zhou, Lingfeng Zhou, Chengyu Ma, Jianyuan Zhong, Xi Wang, Jieru Zhao, <A\n\t          href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Xiaoyan Yang, and Qiang Xu, \"<A href=\"https://ieeexplore.ieee.org/document/11105939\">DeepCircuitX: A Comprehensive Repository-Level Dataset for RTL Code Understanding, Generation, and PPA Analysis</a>\", <strong> LAD' 25</strong>, <i>IEEE International Conference on LLM-Aided Design</i>, Stanford, CA, USA, June 2025."
    },
    {
      "year": "2025",
      "html": "Jiaxin Peng, Zhang Hu, Yinshui Xia, Lunyao Wang, and <A\n\t          href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\"<A href=\"https://ieeexplore.ieee.org/document/11100963\">SAT-Sweeping Based on XOR-Majority Graph</a>\", <strong> ISEDA' 25</strong>,  <i>IEEE International Symposium of EDA</i>, May 2025, Hong Kong, China."
    },
    {
      "year": "2025",
      "html": "Chengkai Qiu, Yanzhen Wang, Hongyang Pan, Yinshui Xia, Lunyao Wang, and <A\n\t          href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\"<A href=\"https://ieeexplore.ieee.org/document/11100908\">STPSim: Accelerating Circuit Simulation via Semi-Tensor Product-Based Parallelism</a>\", <strong> ISEDA' 25</strong>,  <i>IEEE International Symposium of EDA</i>, May 2025, Hong Kong, China."
    },
    {
      "year": "2025",
      "html": "Haonan Wei, Wentao Jiang,  Zhang Hu, Zhengyuan Shi, Yinshui Xia, Lunyao Wang, and <A\n\t          href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\"<A href=\"https://ieeexplore.ieee.org/document/11100798\">Auto-CEC: Combinational Equivalence Checking via Intelligent Sweeping Engine Selection</a>\", <strong> ISEDA' 25</strong>,  <i>IEEE International Symposium of EDA</i>, May 2025, Hong Kong, China."
    },
    {
      "year": "2025",
      "html": "Chen Lv, Chengyu Ma, Hongyang Pan, Yinshui Xia, Lunyao Wang, and <A\n\t          href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\"<A href=\"https://ieeexplore.ieee.org/document/11101222\">Area-oriented Boolean Resubstitution with Efficient Dependency Function Computation</a>\", <strong> ISEDA' 25</strong>,  <i>IEEE International Symposium of EDA</i>, May 2025, Hong Kong, China."
    },
    {
      "year": "2025",
      "html": "Zhang Hu, Hongyang Pan, Yinshui Xia, Lunyao Wang and <A\n\t          href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"<A href=\"https://ieeexplore.ieee.org/document/11133368\">Mixed Structural Choice Operator: Enhancing Technology Mapping with Heterogeneous Representations</a>\",  <strong> DAC' 25</strong>, <i>ACM/IEEE Design Automation Conference</i>, San Francisco, USA, June 2025."
    },
    {
      "year": "2025",
      "html": "Zhengyuan Shi, Tiebing Tang, Jiaying Zhu, Sadaf Khan, Hui-Ling Zhen, Mingxuan Yuan, <A\n       href=\"https://zfchu.github.io/\">Zhufei Chu</a> and Qiang Xu, \"<A href=\"https://ieeexplore.ieee.org/document/11133310\">Logic Optimization Meets SAT: A Novel Framework for Circuit-SAT Solving</a>\",  <strong> DAC' 25</strong>, <i>ACM/IEEE Design Automation Conference</i>, San Francisco, USA, June 2025."
    },
    {
      "year": "2025",
      "html": "Liwei Ni, Rui Wang, Miao Liu, Xingyu Meng, Xiaoze Lin, Junfeng Liu,\n       Guojie Luo, <A href=\"https://zfchu.github.io\">Zhufei Chu</a>, Weikang Qian, Xiaoyan Yang, Biwei Xie, Xingquan\n       Li, Huawei Li, \"<A href=\"https://ieeexplore.ieee.org/document/10943238\">OpenLS-DGF: An Adaptive Open-Source Dataset Generation\n         Framework for Machine Learning Tasks in Logic Synthesis</a>\",  <i> IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems\n     </i>, <strong>TCAD</strong>, Oct. 2025, 44(10):3830-3843."
    },
    {
      "year": "2025",
      "html": "Hongyang Pan, Keren Zhu, Fan Yang,  <A\n       href=\"https://zfchu.github.io/\">Zhufei Chu</a> and Xuan Zeng,\n     \"<A href=\"https://ieeexplore.ieee.org/document/10993190\">ELMap: Area-Driven LUT Mapping with k-LUT Network Exact Synthesis</a>\",\n     <strong> DATE'25</strong>, <i>2025 Design, Automation\n       and Test in Europe Conference</i>, Lyon, France, Mar. 2025."
    },
    {
      "year": "2025",
      "html": "Qiyao He and <A\n       href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\"<A href=\"https://ieeexplore.ieee.org/document/11017876\">Enhancing Alliance VLSI Toolchain by Mixed Gate-level Logic Synthesis</a>\",  <strong>CSTIC' 25</strong>, <i>2025 Conference of Science and Technology for Integrated Circuits</i>, Shanghai, China, Mar. 2025."
    },
    {
      "year": "2024",
      "html": "Lei Chen, Yiqi Chen, <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Wenji Fang, Tsung-Yi Ho, Yu Huang, Sadaf Khan, Min Li, Xingquan Li, \nYun Liang, Yibo Lin, Jinwei Liu, Yi Liu, Guojie Luo, Zhengyuan Shi, Guangyu Sun, Dimitrios Tsaras, Runsheng Wang, Ziyi Wang, Xinming Wei, Zhiyao Xie, Qiang Xu, Chenhao Xue, \nEvangeline F.Y. Young, Bei Yu, Mingxuan Yuan, Haoyi Zhang, Zuodong Zhang, Yuxiang Zhao, Hui-Ling Zhen, Ziyang Zheng, Binwu Zhu, Keren Zhu, and Sunan Zou, \n\"<A href=\"https://link.springer.com/article/10.1007/s11432-024-4155-7\"> Large\n  Circuit Models: Opportunities and Challenges </a>\", <i>Science China Information Sciences</i>, Sep. 2024, 67(10): 200402."
    },
    {
      "year": "2024",
      "html": "Jiaxiang Pan and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"\n   <A href=\"https://ieeexplore.ieee.org/document/10745461\">Area-Aware Logic Mapping for MAGIC based In-Memory Computing</a>\", <strong>SMACD' 24</strong>, <i>International Conference on Synthesis, Modeling, Analysis and Simulation Methods, and Applications to Circuit Design</i>, July\n   2024, Volos, Greece. (<strong>EDA Competition Winner</strong>)"
    },
    {
      "year": "2024",
      "html": "Qiyu Yang, Zheng-Dong Luo, Fei Xiao, Junpeng Zhang, Dawei Zhang,\n     Dongxin Tan, Xuetao Gan, Yan Liu, <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Yinshui Xia, and Genquan Han,  \n     \"<A href=\"https://link.springer.com/article/10.1007/s11432-024-4004-9#citeas\">Solid-state nonvolatile memories based on vdW heterostructure-based vertical-transport ferroelectric field-effect transistors</a>\", \n     <i>Science China Information Sciences</i>, 67, 160405 (2024)."
    },
    {
      "year": "2024",
      "html": "Lei Chen, Yiqi Chen, <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Wenji Fang, Tsung-Yi Ho, Yu Huang, Sadaf Khan, Min Li, Xingquan Li, \nYun Liang, Yibo Lin, Jinwei Liu, Yi Liu, Guojie Luo, Zhengyuan Shi, Guangyu Sun, Dimitrios Tsaras, Runsheng Wang, Ziyi Wang, Xinming Wei, Zhiyao Xie, Qiang Xu, Chenhao Xue, \nEvangeline F.Y. Young, Bei Yu, Mingxuan Yuan, Haoyi Zhang, Zuodong Zhang, Yuxiang Zhao, Hui-Ling Zhen, Ziyang Zheng, Binwu Zhu, Keren Zhu, and Sunan Zou, \n\"<A href=\"https://arxiv.org/abs/2403.07257\">The Dawn of AI-Native EDA: Promises and Challenges of Large\n  Circuit Models</a>\", arXiv preprint arXiv:2403.07257, Mar. 2024."
    },
    {
      "year": "2024",
      "html": "朱柏成,<A href=\"https://zfchu.github.io/\">储著飞</a>,潘鸿洋,王伦耀,夏银水,<A href=\"https://www.jcad.cn/cn/article/doi/10.3724/SP.J.1089.2024.19949\">基于XMG的乘法器电路等价性验证算法</a>,<i>计算机辅助设计与图形学学报</i>,2024, 36(3): 443-451."
    },
    {
      "year": "2024",
      "html": "赵子豪,<A href=\"https://zfchu.github.io/\">储著飞</a>, 王伦耀,夏银水,<A href=\"https://www.jcad.cn/cn/article/doi/10.3724/SP.J.1089.2024.19951\">多级混合极性Reed-Muller逻辑电路功耗优化</a>,<i>计算机辅助设计与图形学学报</i>,2024, 36(4): 615-624."
    },
    {
      "year": "2024",
      "html": "Ming Yan, Guanghai Dong, Yong Xiao, Yun Shao, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"\n   <A href=\"https://ieeexplore.ieee.org/document/10618072\">Exact Synthesis and Inversion Optimization for RM3 based Logic-in-Memory</a>\", <strong>ISEDA' 24</strong>, <i> IEEE International Symposium of EDA</i>, May 2024, pp. 266-271, Xi'an, China."
    },
    {
      "year": "2024",
      "html": "Zhang Hu, Chengyu Ma, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"\n   <A href=\"https://ieeexplore.ieee.org/document/10617691\">A Novel Structural Choices Generation Method for Logic Restructuring</a>\", <strong>ISEDA' 24</strong>, <i> IEEE International Symposium of EDA</i>, May 2024, pp. 306-311, Xi'an, China."
    },
    {
      "year": "2024",
      "html": "Jun Zhu, Hongyang Pan, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"\n  <A href=\"https://ieeexplore.ieee.org/document/10617946\">Multiplication Complexity Optimization based on Quantified Boolean Formulas</a>\", <strong>ISEDA' 24</strong>, <i> IEEE International Symposium of EDA</i>, May 2024, pp. 332-336, Xi'an, China.  (<strong>Honorable Mention Paper Award</strong>)"
    },
    {
      "year": "2024",
      "html": "Yuting Cai, Yue Wu, Xiaoyan Yang, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"\n   <A href=\"https://ieeexplore.ieee.org/document/10618015\">A Logic Optimization Method Using Reinforcement Learning</a>\", <strong>ISEDA' 24</strong>, <i> IEEE International Symposium of EDA</i>, May 2024, pp. 312-317, Xi'an, China."
    },
    {
      "year": "2024",
      "html": "<A href=\"https://zfchu.github.io/\">储著飞</a>, 马铖昱, 闫鸣, 潘家祥,\n       潘鸿洋, 王伦耀, 夏银水,\"<A\n       href=\"https://jeit.ac.cn/cn/article/doi/10.11999/JEIT231457\">基于半张量积的逻辑综合研究进展</a>\",<i>电子与信息学报</i>,2024, 46(09):3490-3502."
    },
    {
      "year": "2024",
      "html": "Huali Duan, Erping Li, Qinyi Huang, Da Li, <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Jian Wang, and Wenchao Chen, \n\"<A href=\"https://pubs.aip.org/aip/jap/article/135/10/104502/3270993\">Investigation of thermal stress effects on subthreshold conduction in nanoscale p-FinFET from Multiphysics perspective</a>\". \n<i>Journal of Applied Physics</i>, Mar. 2024, 135(10)."
    },
    {
      "year": "2024",
      "html": "Tiancheng Li, Erping Li, Huali Duan, <A\n       href=\"https://zfchu.github.io\">Zhufei Chu</a>, Jian Wang, and Wenchao Chen,\n     \"Artificial neural network models for\n     metal-ferroelectric-insulator-semiconductor ferroelectric tunnel junction memristor\",\n     <i>Microelectronics Journal</i>, Feb. 2024, Vol 144, 106083."
    },
    {
      "year": "2024",
      "html": "Hongyang Pan, Yinshui Xia, Lunyao Wang, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\n     \"<A href=\"https://ieeexplore.ieee.org/document/10330666\">Semi-Tensor\n       Product Based Exact Synthesis for Logic Rewriting</a>\", <i> IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems\n     </i>, <strong>TCAD</strong>, Apr. 2024, 43(4):1093-1106."
    },
    {
      "year": "2024",
      "html": "Hongyang Pan, Ruibing Zhang, Yinshui Xia, Lunyao Wang, Fan Yang, Xuan\n     Zeng, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\n     \"<A href=\"https://ieeexplore.ieee.org/document/10546678\">A Semi-Tensor Product based Circuit Simulation for SAT-sweeping</a>\", <strong> DATE' 24</strong>, <i>2024 Design, Automation\n       and Test in Europe Conference</i>, Valencia, Spain, Mar. 2024."
    },
    {
      "year": "2024",
      "html": "Sen Liu, Hongwei Zhou, Yinshui Xia, Lunyao Wang and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"\"<A href=\"https://ieeexplore.ieee.org/document/10532048\">Logic Synthesis for XOR-AND Graphs via Reed-Muller Representations</a>,\" <strong> CSTIC' 24</strong>, <i>2024 Conference of Science and Technology for Integrated Circuits</i>, Shanghai, China, Mar. 2024."
    },
    {
      "year": "2023",
      "html": "Kunmei Hu and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \n     \"<A HREF=https://www.sciencedirect.com/science/article/pii/S002626922300318X>An\n       Efficient Circuit-based SAT Solver and Its Application in Logic\n       Equivalence Checking</a>\", <i>Microelectronics Journal</i>, Vol 142, 106005, Dec. 2023."
    },
    {
      "year": "2023",
      "html": "Zhengyuan Shi, Hongyang Pan, Sadaf Khan, Min Li, Yi Liu, Junhua\n       Huang, Hui-Ling Zhen, Mingxuan Yuan, <A\n         href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Qiang Xu,\"<A href=\"https://ieeexplore.ieee.org/document/10323798\">DeepGate2:\n       Functionality-Aware Circuit Representation\n       Learning</a>\",<strong>ICCAD'23</strong>, 2023 International Conference on Computer-Aided Design, San\n                                                Francisco, CA, USA, Nov. 2023."
    },
    {
      "year": "2023",
      "html": "Hongyang Pan and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"<A\n  href=\"https://jcst.ict.ac.cn/EN/10.1007/s11390-022-1981-4\">A\n     Semi-Tensor Product Based All Solutions Boolean Satisfiability Solver</a>\",<i>Journal of Computer Science and\n    Technology (<strong>JCST</strong>)</i>, 38(3):702-713, May 2023."
    },
    {
      "year": "2023",
      "html": "Hongyang Pan and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"<A\n       href=\"https://ieeexplore.ieee.org/document/10137287\">Exact Synthesis based on Semi-Tensor Product\n                         Circuit Solver</a>\", <strong> DATE' 23</strong>, <i>2023 Design, Automation\n       and Test in Europe Conference</i>, Antwerp, Belgium, Apr. 2023."
    },
    {
      "year": "2023",
      "html": "Hongyang Pan, Ruibing Zhang, Yinshui Xia, Lunyao Wang, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"Semi-Tensor Product based Circuit Simulation for SAT sweeping\n   \", <strong>IWLS' 23</strong>, <i> International Workshop on Logic & Synthesis</i>, June\n   2023, Lausanne, Switzerland."
    },
    {
      "year": "2023",
      "html": "Sen Liu, Hongyang Pan, Yinshui Xia, Lunyao Wang, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"Multiplicative Complexity Optimization Based on Boolean-Difference Resubstitution\", <strong>IWLS' 23</strong>, <i> International Workshop on Logic & Synthesis</i>, June\n   2023, Lausanne, Switzerland."
    },
    {
      "year": "2023",
      "html": "<A href=\"https://zfchu.github.io/\">储著飞</a>、洪庆辉、李冰、刘成、尹勋钊、岳金山、张吉良、卓成、李华伟,\"<A\n       href=\"https://dl.ccf.org.cn/article/detail.html?_ack=1&amp;id=6476820625082368\">存内计算研究进展与发展趋势</a>\",<i>2021-2022中国计算机科学技术发展报告(纸质版)</i>, 2023年5月, pp. 195-252."
    },
    {
      "year": "2023",
      "html": "张健、蔡少伟、陈振邦、贺飞、李占山、马菲菲、吴志林、钟卓炜、<A href=\"https://zfchu.github.io/\">储著飞</a>,\"<A\n\t       href=\"https://dl.ccf.org.cn/article/detail.html?_ack=1&amp;id=6476813273516032\">约束求解技术与应用</a>\",<i>2021-2022中国计算机科学技术发展报告(电子版)</i>, 2023年5月, pp. 1-47."
    },
    {
      "year": "2023",
      "html": "Chunliu Liao, Yong Xiao, Yun Shao, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"<A href=\"https://ieeexplore.ieee.org/document/10218548\">\n       Improved Depth-Aware Circuit Partitioning for Mixed Logic Synthesis</a>\", <strong>ISEDA' 23</strong>, <i> IEEE International Symposium of EDA</i>, May\n2023, pp.170-173, Nanjing, China."
    },
    {
      "year": "2023",
      "html": "Chengyu Ma, Yong Xiao, Yun Shao, and <A\n      href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"<A href=\"https://ieeexplore.ieee.org/document/10218518\">An Integrated Logic\n    Function Decomposition Flow for XOR-Majority Graphs</a>\", <strong>ISEDA'23</strong>, <i> IEEE International Symposium of EDA</i>, May 2023, pp. 146-149,\n    Nanjing, China. (<strong>Honorable Paper Award</strong>)"
    },
    {
      "year": "2023",
      "html": "<A href=\"https://zfchu.github.io/\">储著飞</a>,潘鸿洋,\"<A\n       href=\"https://jeit.ac.cn/cn/article/doi/10.11999/JEIT220391\">基于布尔可满足性的精确逻辑综合综述</a>\",<i>电子与信息学报</i>,2023,\n    45(1):14-23. (<strong>Invited</strong>)"
    },
    {
      "year": "2023",
      "html": "Ruibing Zhang, Hongyang Pan, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"<A href=\"https://ieeexplore.ieee.org/document/10219157\">Logic Circuit Simulation based on Semi-Tensor Product</a>\", \n     <strong>CSTIC' 23</strong>, <i> China Semiconductor Technology International Conference</i>, June\n2023, Shanghai, China."
    },
    {
      "year": "2023",
      "html": "Kunmei Hu and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"<A href=\"https://ieeexplore.ieee.org/document/10219398\">\n       CirSAT: An Efficient Circuit-based SAT Solver via Fanout-driven Decision Heuristic</a>\", <strong>CSTIC' 23</strong>, <i> China Semiconductor Technology International Conference</i>, June\n2023, Shanghai, China."
    },
    {
      "year": "2022",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Chuanhe Shang, Tingting\nZhang, Yinshui Xia, Lunyao Wang, and Weiqiang Liu, \"<A\n  href=\"https://ieeexplore.ieee.org/document/9916208\">Efficient Design of\n  Majority-Logic-Based Approximate Arithmetic Circuits</a>\", <i>IEEE Transactions\n  on Very Large Scale Integration Systems</i> (<strong>TVLSI</strong>), Dec.\n2022, 30(12):1827-1839."
    },
    {
      "year": "2022",
      "html": "Qing Wan, Changjin Wan, Huaqiang Wu, Yuchao Yang, Xiaohe Huang, Peng Zhou, Lin Chen, Tian-Yu Wang, Yi Li, Kanhao Xue, Yuhui He, Xiangshui Miao, Xi Li, Chenchen Xie, Houpeng Chen, Zhitang Song, Hong Wang, Yue Hao, Junyao Zhang, Jia Huang, Zheng Yu Ren, Li Qiang Zhu, Jianyu Du, Chen Ge, Yang Liu, Guanglong Ding, Ye Zhou, Su-Ting Han, Guosheng Wang, Xiao Yu, Bing Chen, <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Lunyao Wang, Yinshui Xia, Chen Mu, Feng Lin, Chixiao Chen, Bojun Cheng, Yannan Xing, Weitao Zeng, Hong Chen, Lei Yu, Giacomo Indiveri and Ning Qiao, \"<A href=\"http://iopscience.iop.org/article/10.1088/2634-4386/ac7a5a\">2022 roadmap on neuromorphic devices & applications research in China </a>\" (Section 12: Automated synthesis and mapping), <i>Neuromorphic Computing and Engineering</i>, 2022, 2(4): 042501. (<strong>Invited</strong>)"
    },
    {
      "year": "2022",
      "html": "Chenghao Yang, Yinshui Xia, <A href=\"https://zfchu.github.io/\">Zhufei\n      Chu</a>, and Xiaojing Zha \"<A href=\"https://ieeexplore.ieee.org/abstract/document/9759467/\">Logic Synthesis Optimization Sequence tuning using RL-based LSTM and Graph Isomorphism Network</a>\",\n    <i>IEEE Transactions on Circuits and Systems II: Express Briefs\n      (<strong>TCAS-II</strong>)</i>, Aug. 2022, 69(8):3600-3604."
    },
    {
      "year": "2022",
      "html": "Peng Liu, Jianguo Ni, and <A href=\"https://zfchu.github.io/\">Zhufei\n      Chu</a>, \"<A href=\"https://link.springer.com/article/10.1007/s10773-022-05000-5\">Wire-crossings Optimization\n    Based on Majority-of-five and XOR-of-three Primitives in QCA </a>\",\n  <i>International Journal of Theoretical Physics</i>, Mar. 2022, 61(3): 1-22."
    },
    {
      "year": "2022",
      "html": "Xiang He and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\n    \"<A href=\"https://www.sciencedirect.com/science/article/pii/S0167926021001243\">Stochastic Circuit Synthesis via Satisfiability</a>\", <i> Integration, the\n       VLSI Journal</i>, May 2022, 84:84-91."
    },
    {
      "year": "2022",
      "html": "Hongwei Zhou, Yong Xiao, Yun Shao, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\n    \"<A href=\"https://ieeexplore.ieee.org/document/9856871/\">Area-aware optimization of XOR-AND Graph based on Reed-Muller logic expansion</a>\",\n<strong>CSTIC' 22</strong>, <i> China Semiconductor Technology International Conference</i>, Mar\n2022, Hangzhou, China."
    },
    {
      "year": "2022",
      "html": "Liangtao Shi, Yong Xiao, Yun Shao, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\n  \"<A href=\"https://ieeexplore.ieee.org/document/9856889/\">Using Mixed Logic Synthesis Tools in Open-Source FPGA Design Framework</a>\",\n<strong>CSTIC' 22</strong>, <i> China Semiconductor Technology International Conference</i>, Mar\n2022, Hangzhou, China."
    },
    {
      "year": "2021",
      "html": "储著飞,王伦耀,夏银水,\"<A href=\"https://kns.cnki.net/kcms/detail/detail.aspx?dbcode=CJFD&amp;dbname=CJFDLAST2022&amp;filename=WNDZ202102009&amp;uniplatform=NZKPT&amp;v=_El82ADdqgNbVp5AMgwZhyulUs-dshiUQttIuWQgT_wsDkSjI_rbpqIctDSEoTOG\">基于多逻辑域的逻辑综合研究进展</a>\",<i>微纳电子与智能制造</i>,2021, 3(2):64-73. (<strong>Invited</strong>)"
    },
    {
      "year": "2021",
      "html": "Hongyang Pan and <A href=\"https://zfchu.github.io/\">Zhufei\n      Chu</a>, \"A Semi-Tensor Product Based SAT All Solutions Solver\",\n    <strong>CCFDAC'21</strong>, CCF Integrated\n    Circuit Design and Automation Conference, Oct. 2021, Wuhan, China. (<strong>Best Paper Award</strong>)"
    },
    {
      "year": "2021",
      "html": "Hui-Ming Tian and <A href=\"https://zfchu.github.io\">Zhu-Fei\n    Chu</a>, \"<A href=\"http://jcst.ict.ac.cn/EN/10.1007/s11390-021-0898-7\">Inversion Optimization Strategy based on Primitives\n    with Complement Attributes</a>\", <i>Journal of Computer Science and\n    Technology (<strong>JCST</strong>)</i>, Sep. 2021, 36(5):1145-1154.\n\n<li>Xiao-Jing Zha, Yin-Shui Xia, Shang-Luan Xie, and <A href=\"https://zfchu.github.io\">Zhu-Fei\n    Chu</a>, \"<A href=\"http://jcst.ict.ac.cn/EN/10.1007/s11390-021-0904-0\">Defect-Tolerant Mapping of CMOL Circuit Targeting Delay Optimization</a>\", <i>Journal of Computer Science and\n    Technology (<strong>JCST</strong>)</i>, Sep. 2021, 36(5):1118-1132.\n\n<li> Jianguo Ni, and <A href=\"https://zfchu.github.io\">Zhufei\n        Chu</a>, \"<A href=\"https://ieeexplore.ieee.org/document/9620355/\">An Efficient Demultiplexer Design in Quantum-dot Cellular Automata</a>\", <strong> ASICON'21 </strong>, <i>IEEE 14th International Conference on ASIC</i>, Oct. 2021, Virtual online.\n\n<li> Chuanhe Shang, and <A href=\"https://zfchu.github.io\">Zhufei\n        Chu</a>, \"<A href=\"https://ieeexplore.ieee.org/document/9620344/\">Design of Majority Logic Based 4-bit Approximate Subtractors and Its\n    Application in Divider </a>\", <strong> ASICON'21 </strong>, <i>IEEE 14th International Conference on ASIC</i>, Oct. 2021, Virtual online.\n\n<li>Xuan Wang, <A href=\"https://zfchu.github.io\">Zhufei Chu</a>, and Weikang Qian, \"<A href=\"https://ieeexplore.ieee.org/document/9643580/\">MinSC: An Exact Synthesis-Based Method for Minimal Area Stochastic Circuits under Relaxed Error Bound</a>\",\n    <strong>ICCAD' 21</strong>, <i>International Conference On Computer Aided Design</i>, Nov. 2021, Virtual online.\n\n<li><A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \n  Zeqiang Li, Yinshui Xia, Lunyao Wang, and Weiqiang Liu, \"<A\n                                                          href=\"https://ieeexplore.ieee.org/document/9311242\">BCD Adder Designs based on Three-Input XOR and Majority Gates</a>\", <i> IEEE Transactions on Circuits and Systems II:\n  Express Briefs(<strong>TCAS-II</strong>)</i>,\nJune 2021, 68(6):1942-1946."
    },
    {
      "year": "2021",
      "html": "Huiming Tian, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\n    \"<A href=\"https://ieeexplore.ieee.org/document/9461426\">A Novel Toffoli Gate Design Using Quantum-dot Cellular Automata</a>\",\n<strong>CSTIC' 21</strong>, <i> China Semiconductor Technology International Conference</i>, Mar\n2021, Shanghai, China."
    },
    {
      "year": "2021",
      "html": "Xiang He, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\n    \"<A href=\"https://ieeexplore.ieee.org/document/9461462\">Stochastic Circuit Design Based on Exact Synthesis</a>\",\n<strong>CSTIC' 21</strong>, <i> China Semiconductor Technology International Conference</i>, Mar\n2021, Shanghai, China."
    },
    {
      "year": "2020",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Mathias\n  Soeken, Yinshui Xia, Lunyao Wang, and Giovanni De Micheli, \"<A\n    href=\"https://ieeexplore.ieee.org/document/8747480\">Advanced Functional Decomposition Using Majority and Its\nApplications</a>\", <i> IEEE Transactions on Computer-Aided Design\nof Integrated Circuits and Systems (<strong>TCAD</strong>)</i>,\nAugust 2020, 39(8):1621-1634."
    },
    {
      "year": "2020",
      "html": "Huiming Tian, <A href=\"https://zfchu.github.io/\">Zhufei\n      Chu</a>, \"Inversion Optimization Strategy\n    based on Primitives with Complement Attribute\",\n    <strong>CCFDAC'20</strong>, CCF Integrated\n    Circuit Design and Automation Conference, Aug. 2020, Beijing, China."
    },
    {
      "year": "2020",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Huiming\n    Tian, Zeqiang Li, Yinshui Xia, and Lunyao Wang, \"<A href=\"https://ieeexplore.ieee.org/document/9061012\">A\n      High-Performance Design of Generalized Pipeline Cellular\n      Array</a>\", IEEE Computer Architecture Letters, Jan.-June 1 2020,\n    19(1):47-50."
    },
    {
      "year": "2020",
      "html": "Lin Chen, and <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>,\n\"<A href=\"https://ieeexplore.ieee.org/document/9282401\">Towards Optimal Logic Representations for Implication-based\nMemristive Circuit</a>\", <strong>CSTIC' 20</strong>, <i> China Semiconductor Technology International Conference</i>, Mar\n2020, Shanghai, China."
    },
    {
      "year": "2020",
      "html": "Zeqi Chen, Jianping Hu, Hao Ye, and <A\n  href=\"https://zfchu.github.io/\">Zhufei Chu</a>, \"<A\n    href=\"https://www.mdpi.com/2072-666X/11/1/64\">T-Channel\n    Field Effect Transistor with Three Input Terminals\n    (Ti-TcFET)</a>\". Micromachines. Jan. 2020, 11(1):64."
    },
    {
      "year": "2019",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Lei Shi,\n  Lunyao Wang, and Yinshui Xia, \"<A href=\"https://www.sciencedirect.com/science/article/pii/S0167926019301932\"> Multi-Objective Algebraic\n       Rewriting in XOR-Majority Graphs</a>\", <i> Integration, the\n       VLSI Journal</i>, 69:40-49, Sep. 2019."
    },
    {
      "year": "2019",
      "html": "Libo Qian, Kefang Qian, Xitao He, <A\n    href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Yidie Ye, Ge\n  Shi, and Yinshui Xia, \"<A href=\"https://ieeexplore.ieee.org/document/8677263\">Through Silicon Via based Capacitor and Its Application in\nLDO Regulator Design</a>\", <i> IEEE Transactions on Very Large\nScale Integration Systems (<strong>TVLSI</strong>)</i>,\n27(8):1947-1951, 2019."
    },
    {
      "year": "2019",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Winston\n  Haaswijk, Mathias Soeken, Lunyao Wang, Yinshui Xia, and Giovanni\n  De Micheli,  \"<A href=\"https://ieeexplore.ieee.org/document/8702141\">Exact Synthesis of Boolean Functions in Majority-of-five Forms</a>\",\n  <strong>ISCAS' 19</strong>, <i> IEEE International Symposium on Circuits and Systems</i>, May\n  2019, Sapporo, Japan."
    },
    {
      "year": "2019",
      "html": "Lei Shi, and <A href=\"https://zfchu.github.io/\">Zhufei\n    Chu</a>,  \"<A href=\"https://ieeexplore.ieee.org/document/8755713\">Inversions Optimization in\n  XOR-Majority Graphs with an Application to QCA</a>\",\n  <strong>CSTIC' 19</strong>, <i> China Semiconductor Technology International Conference</i>, Mar\n  2019, Shanghai, China."
    },
    {
      "year": "2019",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Mathias Soeken, Yinshui\n  Xia, Lunyao Wang and Giovanni De Micheli, \"<A href=\"https://dl.acm.org/citation.cfm?id=3287671\">Structural Rewriting in XOR-Majority Graphs </a>\",\n  <strong>ASPDAC' 19</strong>, <i>Asia and South Pacific Design Automation\n    Conference</i>, Jan 2019, Tokyo, Japan."
    },
    {
      "year": "2019",
      "html": "Qiuhong Ying, Lunyao Wang, <A\n    href=\"https://zfchu.github.io/\">Zhufei Chu</a>, and Yinshui Xia, \"<A href=\"https://ieeexplore.ieee.org/abstract/document/8983435\">Area Optimization of MPRM Circuits Using Approximate Computing</a>\",\n  <strong>ASICON' 19</strong>, <i>International Conference on\n    ASIC</i>, Oct 2019, Chongqing, China."
    },
    {
      "year": "2018",
      "html": "Qi Yu, Lunyao Wang, <A href=\"https://zfchu.github.io/\">Zhufei\n    Chu</a>, and Yinshui Xia , \"<A\n    href=\"https://ieeexplore.ieee.org/abstract/document/8565775\">\n    Approximate Computing for 4-bit Adder Design\n  </a>\",\n  <strong>ICSICT' 18</strong>, <i>The 14th International Conference on Solid-State and Integrated\n    Circuit Technology</i>, Oct. 2018, Qingdao, Shandong, China."
    },
    {
      "year": "2018",
      "html": "Zeqiang Li, <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Yinshui\n  Xia and  Lunyao Wang, \"<A href=\"https://ieeexplore.ieee.org/abstract/document/8565642\">Efficient Design of Decimal Full Adder Using Quantum-dot Cellular Automata </a>\",\n  <strong>ICSICT' 18</strong>, <i>The 14th International Conference on Solid-State and Integrated\n    Circuit Technology</i>, Oct. 2018, Qingdao, Shandong, China."
    },
    {
      "year": "2018",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Mathias Soeken, Yinshui\n  Xia and Lunyao Wang, \"Structural Rewriting in XOR-Majority Graphs </a>\",\n  <strong>IWLS' 18</strong>, <i>International Workshop on Logic & Synthesis</i>, June 2018, San\n  Francisco, CA, USA."
    },
    {
      "year": "2018",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Mathias Soeken, Yinshui\n  Xia and  Giovanni De Micheli, \"<A\n    href=\"http://ieeexplore.ieee.org/document/8297400/\">Functional Decomposition\n    Using Majority</a>\",\n  <strong>ASPDAC' 18</strong>, <i>Asia and South Pacific Design Automation\n    Conference</i>, Jan 2018, Jeju Island, Korea."
    },
    {
      "year": "2017",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Mathias Soeken, Yinshui\n  Xia and  Giovanni De Micheli, \"<A\n    href=\"http://www.iwls.org/iwls2017/program.php\">Functional Decomposition\n    Using Majority</a>\",\n  <strong>IWLS' 17</strong>, <i>International Workshop on Logic & Synthesis</i>, June 2017, Austin, TX, USA."
    },
    {
      "year": "2017",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Xifan Tang, Mathias\n  Soeken, Ana Petkovska, Grace Zgheib, Luca Amaru, Yinshui Xia, Paolo Ienne,\n  Giovanni De Micheli and Pierre-Emmanuel Gaillardon, \"<A\n       href=\"http://dl.acm.org/citation.cfm?id=3060432&amp;CFID=765266662&amp;CFTOKEN=93643535\">Improving\n       Circuit Mapping Performance Through MIG-based Synthesis for Carry\n       Chains</a>\", <strong>GLSVLSI' 17</strong>, <i>ACM Great Lakes Symposium on VLSI</i>, May 2017, Banff, Alberta, Canada."
    },
    {
      "year": "2017",
      "html": "Jibo Wang, Yinshui Xia, <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, and Lunyao Wang, \"Fast Cells Defect-Tolerant Mapping Based on Gate Node Interval Selection in CMOL Circuits\", <i> Journal of Computer-Aided Design and Computer graphics</i>, 29(1):172-179, Jan 2017. (in Chinese)"
    },
    {
      "year": "2016",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Yinshui Xia, Lunyao Wang and Jian Wang, \"<a href=\"http://onlinelibrary.wiley.com/doi/10.1002/cta.2178/full\"> Efficient power pad assignment for multi-voltage SoC and its application in floorplanning</a>\", <i>International Journal of Circuit Theory and Applications</i>, 44(8): 1533–1550, 2016."
    },
    {
      "year": "2016",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Yinshui Xia and Lunyao Wang, \"<a href=\"http://www.sciencedirect.com/science/article/pii/S0167926015001170\"> Multi-supply voltage (MSV) driven SoC floorplanning for fast design convergence </a>\", <i>Integration, the VLSI Journal</i>, 52:335-346, Jan 2016."
    },
    {
      "year": "2014",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Yinshui Xia, Lunyao Wang and Jian Wang, \"<a href=\"http://www.sciencedirect.com/science/article/pii/S002626921400007X\">Efficient nonrectangular shaped voltage island aware floorplanning with nonrandomized searching engine</a>\", <i>Microelectronics Journal</i>, 45(4):382-393, Apr. 2014."
    },
    {
      "year": "2014",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Yinshui Xia, Lunyao Wang, and Jun Zhai \"Wire-bonding Power Pad Assignment and Power Mesh Topological Optimization for Multiple Voltage SoC\", <i> Journal of Computer-Aided Design and Computer graphics</i>, 26(9):1501-1508, Sep 2014."
    },
    {
      "year": "2014",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Yinshui Xia, Lunyao Wang, \"<a href=\"http://dl.acm.org/citation.cfm?id=2591587\"> Level shifter planning for timing constrained multi-voltage SoC floorplanning </a>\", <strong>GLSVLSI' 14</strong>, <i>ACM Great Lakes Symposium on VLSI</i>, May 2014, Houston, USA, pp.329-334."
    },
    {
      "year": "Before 2014",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Yinshui Xia,William N. N. Hung, Xiaoyu Song and Lunyao Wang, “<a href=\"http://www.tandfonline.com/doi/abs/10.1080/00207217.2012.720945\"> Timing-driven logic restructuring for nano-hybrid circuits </a>”, International Journal of Electronics, 100(5):669-685, May 2013."
    },
    {
      "year": "Before 2014",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Yinshui Xia and Lunyao Wang, “<a href=\"https://link.springer.com/article/10.1007/s11390-012-1210-7\">Cell mapping for nanohybrid circuit architecture using genetic algorithm</a>”,Journal of Computer Science and Technology, 27(1):113-120, Jan. 2012."
    },
    {
      "year": "Before 2014",
      "html": "Yinshui Xia, <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, William N. N. Hung, Lunyao Wang and Xiaoyu Song, “<a href=\"http://ieeexplore.ieee.org/document/5738347/\">An integrated optimization approach for nanohybrid circuit cell mapping </a>”,IEEE Transactions on Nanotechnology, 10(6):1275-1284, Nov. 2011."
    },
    {
      "year": "Before 2014",
      "html": "Lunyao Wang, <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, and Yinshui Xia, \"<a href=\"https://link.springer.com/article/10.1007/s11390-013-1397-2\">Low power state assignment algorithm for FSMs considering peak current optimization</a>\", Journal of Computer Science and Technology, 28(6):1054-1062, Nov. 2013."
    },
    {
      "year": "Before 2014",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Yinshui Xia, Lunyao Wang and Jian Wang, \"Voltage drop aware power pad assignment and floorplanning for multi-voltage SoC designs\", <i>13th International Conference on Computer-Aided Design and Computer Graphics (<strong>CAD/Graphics 2013</strong>)</i>, Nov. 2013, Hongkong, pp. 87-94."
    },
    {
      "year": "Before 2014",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Yinshui Xia, William N. N. Hung, Lunyao Wang and Xiaoyu Song , “A memetic approach for nanoscale circuit cell mapping”,<i>13th EUROMICRO Conference on Digital System Design (<strong>DSD 2010</strong>)</i>, Sep. 2010, Lille, France."
    },
    {
      "year": "Before 2014",
      "html": "<A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, Yinshui Xia, Lunyao Wang and Meiqun Hu, “CMOL cell assignment based on dynamic interchange”,<i>Proceedings 2009 8th IEEE International Conference on ASIC (<strong>ASICON 2009</strong>)</i>,Oct. 2009, Changsha, China."
    },
    {
      "year": "Before 2014",
      "html": "Yinshui Xia, <A href=\"https://zfchu.github.io/\">Zhufei Chu</a>, William N. N. Hung, Lunyao Wang and Xiaoyu Song, “CMOL cell assignment by genetic algorithm”,<i>8th IEEE NEWCAS Conference (<strong>NEWCAS 2010</strong>)</i>,Jun. 2010, Montreal, Canada."
    },
    {
      "year": "Before 2014",
      "html": "Zhufei Chu, Yinshui Xia and Lunyao Wang, \"Fast mapping of Nano/CMOS cells\", <i> Journal of Computer-Aided Design and Computer graphics</i>, 23(3):514-520, Mar 2011."
    },
    {
      "year": "Before 2014",
      "html": "Yinshui Xia, Zhufei Chu, Lunyao Wang, William N N Hung and Xiaoyu Song, \"Logic Equivalent Transformation for Nano-meter CMOS Hybrid Circuits\", <i> Journal of Electronics and Information Technology</i>, 33(7):1733-1737, July 2011."
    }
  ],
  "news": [
    "July 2026, Invited to serve as the Finance Chair of <A href=\"https://www.iwls.org/iwls2027\">IWLS'27</a> (Shanghai, 2027).",
    "July 2026, Invited to serve as a TPC member of <A\n        href=\"https://www.date-conference.com/\">DATE'27</a>.",
    "Jan. 2026, Invited to serve as a Guest Editor of <A href=\"https://www.sciencedirect.com/special-issue/329310/2025-china-computer-federation-integrated-circuit-design-and-automation-conference-ccf-dac\"> Integration, the VLSI Journal</a>.",
    "July 2025, I will serve as the General Chair of <A\n        href=\"https://www.iwls.org/iwls2026/\">IWLS'26</a> (Hong Kong, 2026) <A\n     href=\"https://www.nbu.edu.cn/info/2111/112551.htm\">[NBU news]</a>.",
    "July 2025, I will serve as the Organizing Chair of <A\n        href=\"https://conf.ccf.org.cn/ccfdac2025\">CCFDAC'25</a> (Ningbo, Oct 2025).",
    "July 2025, Invited to serve as a TPC member of <A\n        href=\"https://www.aspdac.com/\">ASPDAC'26</a>.",
    "June 2025, Invited to serve as a TPC member of <A\n        href=\"https://www.date-conference.com/\">DATE'26</a>.",
    "Feb. 2025, Invited to serve as a TPC member of <A\n        href=\"https://sasimi.jp/new/sasimi2025/\">SASIMI'25</a>.",
    "Jan. 2025, Invited to serve as TPC Chair of <A\n        href=\"http://iccs.org/index.html\">ICCS'25</a>.",
    "Jan. 2025, Invited to serve as a TPC\n       member of <A href=\"https://www.iwls.org/iwls2025/\">IWLS'25</a>.",
    "Dec. 2024, Invited to serve as High-Level, Behavioral, and Logic\n        Synthesis and Optimization Track\n      Chair of <A href=\"https://www.eda2.com/iseda/\">ISEDA'25</a>.",
    "Oct. 2024, Invited to serve as a TPC Member of <A\n            href=\"https://www.dac.com\">\n        DAC'25</a>.",
    "Sep. 2024, Jun as the first author won the ISEDA Honorable Mention\n          Paper Award at <A href=\"https://www.eda2.com/conferenceHome/\">ISEDA'24</a>.",
    "July 2024, Jiaxiang as the first author won the EDA Competition Winner\n          at <A href=\"https://smacd-conference.org/\">SMACD'24</a>.",
    "June 2024, Invited to serve as a TPC Member of <A\n            href=\"https://www.date-conference.com/tpc\">\n        DATE'25</a>.",
    "Mar. 2024, Invited to serve as a TPC Member of <A\n        href=\"https://std.samr.gov.cn/search/orgDetailView?data_id=EE1BA472BFC52880E05397BE0A0A248E\">\n        National Standardization TC 599/ WG1</a>.",
    "Oct. 2023, Invited to serve as a Research TPC Subcommittee Member of <A\n        href=\"https://www.dac.com/\">\n        DAC'24</a>.",
    "Oct. 2023, Invited to serve as Digital Design & Verification Track\n      Chair of <A href=\"https://www.eda2.com/conferenceHome/\">ISEDA'24</a>.",
    "Oct. 2023, Invited to serve as a <A\n                                            HREF=https://www.semiconchina.org/en/7>TPC member</a> and <A\n        HREF=https://www.semiconchina.org/en/1244>invited speaker</a> of\n      <A HREF=https://www.semiconchina.org/en/5>CSTIC'24</a>.",
    "Aug. 2023, Invited to serve as a Competition Committee Member of <A href=\"https://eda.icisc.cn/activity/toTpcType\">EDA Elite Challenge</a>.",
    "July 2023, Chengyu as the first author won the Honorable Paper Award\n      at <A href=\"https://www.eda2.com/conferenceHome/\">ISEDA'23</a>.",
    "May 2023, Invited to serve as Publication Chair of <A href=\"https://conf.ccf.org.cn/ccfdac23\">CCFDAC'23</a>.",
    "Mar. 2023, Invited to serve as a Editorial Board Member of <A\n        href=\"https://jeit.ac.cn/news/About%20Journal.htm\">JEIT</a>.",
    "Mar. 2023, Invited to serve as TPC Chair of <A\n        href=\"http://iccs.org/index.html\">ICCS'23</a>.",
    "Dec. 2022, Promoted to be a Full Professor.",
    "Dec. 2022, Invited to serve as Finance Chair and TPC\n       member of <A href=\"https://www.iwls.org/iwls2023/\">IWLS'23</a>.",
    "Nov. 2022, Invited to serve as a Research TPC Subcommittee Member of <A\n        href=\"https://www.dac.com/\">\n        DAC'23</a>.",
    "Oct. 2022, Invited to serve as Digital Design & Verification Track\n      Chair of <A href=\"https://www.eda2.com/conferenceHome/\">ISEDA'23</a>.",
    "May 2022, Invited to serve as sub-forum co-chair and a TPC member of <A\n                                                           href=\"http://conf.ccf.org.cn/chip2022\">CCF\n                                                           Chip'22</a>.",
    "Oct. 2021, Invited to serve as a TPC member of <A\n                                                           href=\"https://embeddedandvlsidesignconference.org/\">VLSID'22</a>.",
    "Oct. 2021, Won the Best Paper Award at <A href=\"http://conf.ccf.org.cn/ccfdac2021\">CCFDAC'21</a>. (<A href=\"https://news.nbu.edu.cn/info/1004/42169.htm\">NBU link</a>)",
    "Aug. 2021, Invited to serve as Finance Chair and a TPC\n       member of <A href=\"https://www.iwls.org/iwsl2022/\">IWLS'22</a>.",
    "Jan. 2021, Invited to serve as Proceedings Chair and a TPC member of <A href=\"https://www.iwls.org/iwls2021/\">IWLS'21</a>.",
    "Oct. 2020, Invited to serve as a TPC member of <A\n                                                           href=\"https://embeddedandvlsidesignconference.org/\">VLSID'21</a>.",
    "Aug. 2020, Invited to serve as a TPC member of <A\n       href=\"https://www.semiconchina.org/en/7\">\n       CSTIC'21</a> (Symposium IX).",
    "Aug. 2020, Invited to serve as a TPC member of <A\n       href=\"https://sites.google.com/view/vlsi-soc-2020/home\">\n       VLSI-SoC'20</a> (PhD Forum).",
    "Aug. 2020, Invited to serve as a TPC member of <A\n       href=\"http://www.iccd-conf.com/Home.html\">\n       ICCD'20</a> (Special Sessions).",
    "Mar. 2020, Invited to serve as a TPC member of <A\n       href=\"https://conf.ccf.org.cn/web/html5/index.html?globalId=574c0f1ef8c04db9bd3b5d718e091b5c&amp;type=1\"> CCFDAC'20</a>.",
    "Feb. 2020, Invited to serve as a TPC member of <A\n       href=\"https://coinsconf.com/\"> COINS'20</a>.",
    "Jan. 2020, Invited to serve as Proceedings Chair of <A\n       href=\"http://www.iwls.org/iwls2020/\"> IWLS'20</a>.",
    "June 2019, Invited to serve as a TPC member of <A\n                                                           href=\"https://embeddedandvlsidesignconference.org/\">VLSID'20</a>.",
    "Feb. 2019, Invited to serve as Proceedings Chair and\n     Session Chair of <A href=\"http://www.iwls.org/iwls2019/\"> IWLS'19</a>."
  ],
  "tutorials": [
    "The <A href=\"https://www.eda2.com/iseda2024/tutorials.html\">\"Boolean Satisfiability Solving, State-of-the-Art\"</a> Tutorial organized by Ningbo University, The Chinese University of Hong Kong, and Institute of Software, Chinese Academy of Sciences is presented at <A\n  href=\"https://www.eda2.com/conferenceHome/\">ISEDA'24</a> on May 10th, 2024.",
    "The <A href=\"https://www.eda2.com/conferenceHome/program/detail?key=tutorial2\">\"Logic Synthesis Tools and Techniques: Insights from Academia and\n    Industry\"</a> Tutorial organized by Ningbo University and Giga\nDesign Automation is presented at <A\n  href=\"https://www.eda2.com/conferenceHome/\">ISEDA'23</a> on May 8th, 2023.\n<a href=\"https://zfchu.github.io/ISEDA2023.pdf\" download >[handouts]</a>, \n<a href=\"https://zfchu.github.io/also.mp4\" download >[demo video]</a>.",
    "An online tutorial <A\n    href=\"https://www.bilibili.com/video/BV1pD42137QY/\">\"Logic Synthesis EDA Tools\"</a> invited by eetrend was\n  presented on May 29th, 2024.",
    "An online tutorial <A\n    href=\"https://www.bilibili.com/video/BV1Ha411J7ow/?p=3\">\"Logic Synthesis,\n    Optimization, and Verification\"</a> invited by Xidian University was\n  presented on Apr. 25th, 2022."
  ],
  "services": [
    "General Chair for the International Workshop on Logic and Synthesis, 2026.",
    "Proceedings Chair, TPC member, and Session Chair  for the International Workshop on Logic and Synthesis, 2019-2021.",
    "Finance Chair, TPC member, and Session Chair  for the International\n     Workshop on Logic and Synthesis, 2022-2023.",
    "TPC member for the International\n       Workshop on Logic and Synthesis, 2024-2025.",
    "Digital Design & Verification Track Chair of the IEEE International Symposium of EDA, 2023-2024.",
    "High-Level, Behavioral, and Logic Synthesis and Optimization Track Chair of the IEEE International Symposium of EDA, 2025.",
    "TPC Chair for the International Conference on Circuits and Systems\n     (ICCS), 2023, 2025.",
    "Editorial Board Member for the Journal of Electronics and Information Technology (JEIT), 2023-2026",
    "TPC member for the Design Automation Conference, 2023-2025.",
    "TPC member for the Design, Automation and Test in Europe Conference, 2024.",
    "TPC member for the International Conference on VLSI Design, 2020-2022.",
    "TPC member for the China Semiconductor Technology International Conference (Symposium IX), 2021-2025.",
    "TPC member for the IFIP/IEEE International Conference on Very Large Scale Integration (PhD Forum), 2020.",
    "TPC member for the IEEE International Conference on Computer Design (Special Sessions), 2020.",
    "TPC member for the IEEE International Conference on Omni-layer Intelligent systems, 2019-2020.",
    "TPC member and Session Chair for the CCF Integrated Circuit Design and\n    Automation Conference, 2020-2023.",
    "Reviewer for the journal IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems.",
    "Reviewer for the journal IEEE Transactions on Computers.",
    "Reviewer for the journal IEEE Transactions on Very Large Scale Integration (VLSI) Systems.",
    "Reviewer for the journal IEEE Transactions on Information Forensics and Security.",
    "Reviewer for the journal IEEE Transactions on Emerging Topics in Computing.",
    "Reviewer for the journal IEEE Transactions on Circuits and Systems-Part I.",
    "Reviewer for the journal IEEE Transactions on Circuits and Systems-Part II.",
    "Reviewer for the journal IEEE Transactions on Information Forensics & Security.",
    "Reviewer for the journal ACM Transactions on Design Automation of Electronic Systems.",
    "Reviewer for the journal IET Circuits, Devices & Systems.",
    "Reviewer for the journal Journal of Computer Science and Technology.",
    "Reviewer for the journal Integration, the VLSI Journal.",
    "Reviewer for the journal Microelectronics Journal.",
    "Reviewer for the journal International Journal of Circuit Theory and Applications.",
    "Reviewer for the journal IET Quantum Communication.",
    "Reviewer for the journal IET Computers & Digital Techniques.",
    "Reviewer for the journal Optik, International Journal for Light and Electron Optics.",
    "Reviewer for the journal Journal of Combinatorial Optimization.",
    "Reviewer for the journal Journal of Supercomputing.",
    "Reviewer for the journal The Computer Journal.",
    "Reviewer for the journal Theoretical Computer Science."
  ],
  "links": [
    "<a href=\"http://www.cse.chalmers.se/research/group/vlsi/conference/\">VLSI\n    Conference Table</a>, <a href=\"http://www.ieee-ceda.org/\">CEDA</a>, \n  <a href=\"http://ieeexplore.ieee.org/Xplore/dynhome.jsp\">Xplore</a>"
  ]
};
