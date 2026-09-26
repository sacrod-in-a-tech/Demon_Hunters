export interface BlogSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'bullet' | 'code'
  text: string
}

export interface BlogPost {
  id: string
  category: string
  title: string
  description: string
  date: string
  tag: string
  content: BlogSection[]
}

export const posts: BlogPost[] = [
  {
    id: 'anthropic-claude-distillation-attacks',
    category: 'AI SECURITY',
    title: 'Anthropic Says Seven China-Based AI Labs Ran Industrial-Scale Claude Distillation Attacks',
    description:
      'Anthropic disrupted industrial-scale illicit distillation attacks against Claude from seven China-based labs, including Alibaba, Moonshot, DeepSeek, Z.ai, and MiniMax.',
    date: 'September 2026',
    tag: 'AI',
    content: [
      {
        type: 'paragraph',
        text: 'Anthropic on Thursday said it identified and disrupted industrial-scale illicit distillation attacks against Claude from seven labs based in China, including Alibaba, Moonshot, DeepSeek, Z.ai (aka Zhipu), and MiniMax. Knowledge distillation by itself is a legitimate training method. It refers to a machine learning technique where a large, powerful AI model assumes the role of a "teacher" to train a smaller, less-capable or faster "student" model to copy its capabilities.',
      },
      {
        type: 'paragraph',
        text: 'Illicit distillation, on the other hand, is an industrial-scale campaign that covertly extracts a model\'s capabilities and replicates them in another model without authorization, typically by making use of networks of fake accounts created with stolen credit cards, login credentials, and API keys. Frontier AI labs in the West, including those from Google and OpenAI, have repeatedly called out distillation attacks aimed at their models. Anthropic said it has observed unauthorized labs employing "increasingly sophisticated methods" to get around defenses and harvest its capabilities, such as agentic capabilities and tool use, coding and data analysis, and logical reasoning, through prompt manipulation tricks.',
      },
      {
        type: 'paragraph',
        text: '"DeepSeek, Xiaomi, and Moonshot fed conversations between their own models and users into Claude," Anthropic said. "These labs then used Claude\'s responses as training data with which to distill Claude\'s capabilities. Some of these exchanges included sensitive information, including from individual users, major multinational companies, and state-affiliated actors."',
      },
      {
        type: 'paragraph',
        text: 'The AI company said these labs generally gain access to its models by routing requests through proxy services, also referred to as transfer or relay stations, which create thousands of new accounts under fictitious identities, fake or stolen credit cards, and illegally harvested API keys that belong to legitimate companies or individuals.',
      },
      {
        type: 'paragraph',
        text: 'According to Anthropic, unauthorized AI labs also acquire transcripts of user exchanges with U.S. frontier models by purchasing them off third-party resellers, who are the operators of proxy services that save such conversations without the users\' knowledge or consent.',
      },
      {
        type: 'paragraph',
        text: '"In other cases, unauthorized labs rerouted requests from their users to Claude -- without the knowledge or permission of those users -- to harvest exchanges between users and Claude for training," Anthropic pointed out.',
      },
      {
        type: 'heading',
        text: 'Six Distillation Campaigns Since February 2026',
      },
      {
        type: 'paragraph',
        text: 'Since February 2026, the AI company said it has detected six illicit distillation campaigns that were conducted by China-based AI labs to advance their own models:',
      },
      {
        type: 'bullet',
        text: 'GTG-16005 (151 million exchanges observed between May and July 2026) — a cluster of Alibaba-affiliated operators targeted the chain-of-thought (CoT) reasoning transcripts of Claude Opus 4.6 and 4.7 in what has been described as the "largest distillation attack we have ever measured." It peaked at roughly 3 million exchanges per day launched from more than 3,500 fraudulent accounts targeting agentic tasks, software engineering, kernel development, and long-horizon tasks.',
      },
      {
        type: 'bullet',
        text: 'GTG-16002 (23 million exchanges observed between May and July 2026) — Moonshot AI stealthily rerouted customer requests to Claude instead of processing them using Kimi, then displayed responses from Claude to users while capturing a subset of exchanges to train its CoT model. Over a 10-day period, Moonshot relayed almost 300,000 customer requests to Anthropic using a proxy service network of 5,380 fraudulent accounts, most located in Singapore and Japan.',
      },
      {
        type: 'bullet',
        text: 'GTG-16001 (more than 12.1 million exchanges observed over 14 days in July 2026) — DeepSeek followed the same approach as Moonshot AI to silently relay exchanges to Claude without informing its customers and extract CoT transcripts.',
      },
      {
        type: 'bullet',
        text: 'GTG-16006 (more than 3.4 million exchanges observed over 17 days in June and July 2026) — Zhipu (aka Z.ai) ran a CoT extraction pipeline and replayed Claude reasoning traces through Claude to train its models, rotating through 273 fraudulent accounts.',
      },
      {
        type: 'bullet',
        text: 'GTG-16008 (more than 400,000 exchanges observed over 20 days in March and April 2026) — Xiaomi replayed user conversations and coding sessions from its own MiMo models to Claude, through OpenClaw and OpenCode coding harnesses, to bolster training data for future models.',
      },
      {
        type: 'bullet',
        text: 'GTG-16012 — SenseTime purchased transcripts of user exchanges with Claude from third-party data vendors.',
      },
      {
        type: 'bullet',
        text: 'GTG-16003 — MiniMax built its own proxy network service through a shell company that offers access to models developed by Anthropic and OpenAI, likely aiming to collect exchanges between users and U.S. frontier models to train its models.',
      },
      {
        type: 'paragraph',
        text: '"The proliferation of proxy services to circumvent Anthropic access restrictions has created a secondary market through which labs can purchase or otherwise acquire harvested exchanges between users and Claude," Anthropic said. "Some proxy networks both provide Claude access to users in unsupported regions, and also save exchanges in order to sell them to other labs."',
      },
      {
        type: 'heading',
        text: "Anthropic's Response",
      },
      {
        type: 'paragraph',
        text: 'To counter illicit distillation, the company said it bans reseller accounts or accounts operating from unsupported regions like China, Iran, and Russia when users fail to verify their identity. To make it harder for unauthorized labs to distill Claude\'s capabilities, the model has been updated to summarize its internal reasoning before responding, thereby making stolen transcripts less useful for follow-on training.',
      },
      {
        type: 'paragraph',
        text: '"And with Fable 5.1 we introduced preserved thinking, which stops new API accounts from altering the system prompt, tools, or messages that precede Claude\'s reasoning in multi-turn conversations," the company added. "That reasoning is encrypted, but editing the context before it is a common technique attackers use to make Claude reveal it."',
      },
      {
        type: 'paragraph',
        text: 'The development comes as Anthropic said it took down a number of accounts that tried to use its models to surveil their citizens and to research diseases in ways that could support biological weapons. Earlier this week, U.S. cybersecurity and intelligence agencies accused China-based artificial intelligence (AI) companies of conducting "systematic extraction" of proprietary functionalities and capabilities of American frontier models through distillation attacks.',
      },
    ],
  },

  {
    id: 'jfrog-artifactory-flaws',
    category: 'VULNERABILITIES',
    title: 'Attackers Chain JFrog Artifactory Flaws to Gain Admin Control and Plant Backdoors',
    description:
      'Attackers chained two JFrog Artifactory vulnerabilities to seize administrator control of self-hosted servers and plant backdoors, cloud security company Wiz reports.',
    date: 'September 2026',
    tag: 'CVE',
    content: [
      {
        type: 'paragraph',
        text: 'Attackers have chained two flaws in JFrog Artifactory, the repository that software build pipelines pull from, to take administrator control of self-hosted servers and plant backdoors, cloud security company Wiz said in a report. Wiz saw the attacks between August 15 and September 8. JFrog had fixed both flaws before then, so only servers that had not been updated were open to them. Neither flaw gives administrator control on its own.',
      },
      {
        type: 'bullet',
        text: 'CVE-2026-42018 makes Artifactory hand an internal anonymous-user token to a caller who has not logged in, even when anonymous access is turned off.',
      },
      {
        type: 'bullet',
        text: "CVE-2026-42016 then allows that low-privilege token to be swapped for one with administrator scope, because Artifactory checks a token's signature and who issued it, but not what the token is allowed to do.",
      },
      {
        type: 'paragraph',
        text: 'Every case Wiz saw followed a similar pattern. The attacker sent an unauthenticated request to a token endpoint and received a token for the internal anonymous user, then exchanged it at Artifactory\'s token-creation endpoint for a token with administrator scope. That second token keeps the anonymous username. Administrator actions taken with it show up in the logs as token:anonymous rather than under a named account. In some cases, the attacker went from the first request to a new administrator account in under five minutes.',
      },
      {
        type: 'paragraph',
        text: 'The chain reaches a narrower set of builds than either flaw alone. A server has to be affected by both, so closing either one breaks it. In JFrog\'s published ranges, CVE-2026-42016 ends at 7.133.11, leaving the 7.146 and 7.161 branches outside that range. JFrog shipped the CVE-2026-42018 fix on the 7.146 branch on April 28 and on the 7.133 branch on August 12, three days before the attacks Wiz saw began.',
      },
      {
        type: 'paragraph',
        text: 'What the attackers did with administrator authority varied. Wiz said no single actor carried out every step it saw.',
      },
      {
        type: 'paragraph',
        text: 'Across the compromised servers, attackers created administrator accounts and left them in place. They also installed malicious Groovy plugins via Artifactory\'s plugin framework, granting them code execution on the server. Some ran shell commands via the plugin execution endpoint to explore and list files. A dropper pulled a binary over HTTP, wrote it to a world-writable directory such as /tmp, and opened a command-and-control channel. Wiz said it also saw a custom Rust backdoor with command-and-control features dropped in multiple cases.',
      },
      {
        type: 'heading',
        text: 'A Third Flaw: CVE-2026-82329',
      },
      {
        type: 'paragraph',
        text: 'A third Artifactory flaw in the same report, CVE-2026-82329, was exploited separately between September 1 and September 8, and it is the reason a server on a newer branch may still be affected. It is a critical authentication bypass, rated 9.8 on the CVSS scale, that targets Artifactory\'s default configuration and requires no additional flaw. An unauthenticated attacker with network access can obtain administrator privileges through it alone, on six release branches up to 7.161.',
      },
      {
        type: 'paragraph',
        text: 'The Hacker News reported on September 1 that attackers had begun creating administrator tokens for themselves through that flaw days after JFrog disclosed it. CISA added it to its catalog of known exploited vulnerabilities on September 2 and set a September 5 deadline for federal agencies. Fastly, a content delivery network, said in an analysis that a public exploit appeared on September 1 and scanning followed. It counted about 406,000 exploitation attempts across its platform on September 2, its busiest day. Those are attempts seen in traffic, not compromises. On servers taken through that flaw, Wiz saw attackers read the system configuration and, in several cases, take the cluster join key, the shared secret Artifactory nodes use to register with one another.',
      },
      {
        type: 'heading',
        text: 'What to Install',
      },
      {
        type: 'paragraph',
        text: "Upgrade self-hosted Artifactory to the fixed build for your release branch, listed in JFrog's security advisories. JFrog says cloud instances need no action.",
      },
      {
        type: 'code',
        text:
          'CVE-2026-42018 | Returns an internal anonymous-user token to a caller who has not logged in\n' +
          '  Affected: Below 7.111.20, and below 7.117.27, 7.125.19, 7.133.28, and 7.146.8 on those branches\n' +
          '  Fixed in: 7.111.20, 7.117.27, 7.125.19, 7.133.28, 7.146.8\n\n' +
          'CVE-2026-42016 | Lets a low-privilege token be exchanged for an administrator-scope token\n' +
          '  Affected: Before 7.133.11\n' +
          '  Fixed in: 7.133.11\n\n' +
          'CVE-2026-82329 | Gives an unauthenticated attacker administrator privileges on its own\n' +
          '  Affected: Below 7.111.21, and below 7.117.28, 7.125.20, 7.133.29, 7.146.38, and 7.161.20 on those branches\n' +
          '  Fixed in: 7.111.21, 7.117.28, 7.125.20, 7.133.29, 7.146.38, 7.161.20',
      },
      {
        type: 'paragraph',
        text: "JFrog lists one fixed version for CVE-2026-42016, 7.133.11, and no separate fix for each branch. Its advisory does not say whether a later build on an older branch, such as 7.117.28, also closes it. The Hacker News has asked JFrog that question, and has asked Wiz which versions the compromised servers were running. For CVE-2026-82329, JFrog publishes a workaround for anyone who cannot upgrade quickly: generate a random value and add it as an extra join key in system.yaml, so that only your own keys are accepted when a service registers. There is no interim option for the two chained flaws in any of the advisories or reports consulted.",
      },
      {
        type: 'heading',
        text: 'What Patching Does Not Undo',
      },
      {
        type: 'paragraph',
        text: 'The administrator accounts the attackers created do not disappear when the software is updated. Wiz saw them created both through the two-flaw chain and through CVE-2026-82329. For CVE-2026-82329, Fastly advises treating any exposed server as compromised. "A patch does not revoke tokens already minted," the company said. An upgrade also does not change a join key attackers have already taken. Fastly recommends rotating the platform join key, revoking access tokens issued since August 28, and reviewing administrator accounts, repositories, and configuration changes.',
      },
      {
        type: 'heading',
        text: 'How to Check',
      },
      {
        type: 'paragraph',
        text: "The clearest signal is an account doing something its privileges should not allow: the internal anonymous user, or any low-privilege account, creating tokens, listing users, or reading and writing plugins. Then look for administrator accounts nobody created on purpose. Most of the ones Wiz saw carry proof-of-concept names such as 0xTerror, or svc_ and labadmin_ followed by random characters. Some were made to blend in, with names like jfrog-distribution, jfrog-insight and repo-service. Wiz's report lists attacker addresses and a payload hash. CVE-2026-42016 was published on July 27 as part of a batch of Artifactory advisories, several of which credit OpenAI researchers, including this one. The Hacker News reported in July that JFrog had confirmed OpenAI models exploited an Artifactory zero-day during an internal evaluation, and that neither company had said which CVE records match the flaws used.",
      },
    ],
  },

  {
    id: 'unc3569-grayrabbit-backdoor',
    category: 'THREAT INTELLIGENCE',
    title: 'China-Linked UNC3569 Exploited Sogou Input Method Flaw to Deploy GRAYRABBIT Backdoor',
    description:
      "A China-linked hacking group exploited a flaw in Sogou Input Method to install the GRAYRABBIT backdoor on victims' Windows computers, Gen Digital reports.",
    date: 'September 2026',
    tag: 'APT',
    content: [
      {
        type: 'paragraph',
        text: "A China-linked hacking group exploited a flaw in Sogou Input Method, one of the most widely used tools for typing Chinese characters on Windows, to install a backdoor on victims' computers, security company Gen Digital said in research published Thursday. The attack started with a crafted link and ended with the attacker able to do anything the logged-in user could do. Tencent, which owns and develops Sogou, fixed the flaw in April 2026.",
      },
      {
        type: 'paragraph',
        text: 'Gen found the flaw while investigating a live intrusion by UNC3569, a group that Google Threat Intelligence ties to China and places in the country\'s hacker-for-hire scene. Google has tracked the group since 2021 and says it has targeted government, education, technology, and finance sectors, mostly in East and Southeast Asia. The backdoor it installed is GRAYRABBIT, a small program the group has used for years and that Google describes as its first step onto a machine. It gives an attacker a remote command shell, allows files to be moved in both directions, and can load additional modules from the attacker\'s server at any time.',
      },
      {
        type: 'paragraph',
        text: "Tencent's fix blocked the way in. It did not change the part of Sogou that made the attack possible. In the patched version Gen examined, the built-in browser engine is still the 2020 version, and its sandbox is still switched off.",
      },
      {
        type: 'heading',
        text: 'How One Link Reached the Machine',
      },
      {
        type: 'paragraph',
        text: 'Sogou Input Method is the most popular Chinese input method in China, according to 2023 research by Citizen Lab at the University of Toronto. That research put its user base at more than 455 million people a month across Windows, Android and iOS, and its share of Chinese input-method users at about 70%. Citing market research on visits to the product\'s website, it also noted that users are not only in China, with the United States accounting for over 3.3% of visits.',
      },
      {
        type: 'paragraph',
        text: "The same research found flaws in the app's encryption that exposed what people typed. The flaw Gen found is in the Windows version. Sogou Input Method is not one program there. It is a set of components that communicate with each other via a custom link type registered on Windows, sgbiz:. When anything opens an sgbiz: link, Windows passes it to biz_helper.exe, which reads the link and starts the Sogou component it names.",
      },
      {
        type: 'paragraph',
        text: "That handler checks which program the link asks it to start. It does not check the command-line arguments the link asks it to pass along. Gen found no filtering on them at all. So the attacker picked the arguments. The link pointed at SGMyInput.exe, Sogou's settings program, and told it to open the skin store with a web address of the attacker's choosing. The skin store is the only screen in that program that opens a browser window. The code sends that browser to whatever address it is handed, with no check on the address at all. That browser is where the third problem sits. Sogou builds its own copy of Chromium, and it's version 80, from around March 2020.",
      },
      {
        type: 'paragraph',
        text: "Gen found two of the browser's protections switched off and written into the code that way: the sandbox, which normally keeps a compromised web page away from the rest of the computer, and the same-origin policy, which stops a page reading data from other sites. With the sandbox gone, a JavaScript flaw in the page becomes code that runs on the user's computer with the user's privileges. There is no second step to exit the browser.",
      },
      {
        type: 'paragraph',
        text: 'Gen says clicking the link was all it took. Tencent does not agree. In a response quoted in the research, Tencent described the chain as relatively complex and said an attacker would need social engineering to get the user to "actively authorize the browser\'s pop-up prompt." Browsers built on Chromium do show a confirmation box before handing a link to a separate program on the computer, and a user can tick a box to stop seeing it for a given site. Neither company says what the people in this campaign saw. Gen says the link could also arrive by email or chat message, and neither account says what a user sees when a link is opened that way.',
      },
      {
        type: 'heading',
        text: 'Why a 2021 Browser Bug Still Worked',
      },
      {
        type: 'paragraph',
        text: "The page the victims were sent to carried an exploit for CVE-2021-38003, a flaw in how V8, Chrome's JavaScript engine, handled JSON.stringify. It let an internal value that scripts should never see escape into the page, and from there an attacker could corrupt memory and run code.",
      },
      {
        type: 'paragraph',
        text: "Google fixed it in Chrome 95 in October 2021. CISA added it to its catalog of vulnerabilities known to have been exploited on November 3, 2021. Singapore firm STAR Labs published a full analysis and working exploit code in December 2022. Sogou's Chromium build never received that fix. It never got most of the others either. Of the 41 Chromium V8 flaws in CISA's catalog, at least 32 were fixed in Chrome releases that came out after the version Sogou ships. The Hacker News checked each flaw's CVE record against that version. That is a count of flaws, not a count of ways into Sogou. Whether any of them can be reached through the skin store window depends on what the page can touch inside it, and no one has published that work.",
      },
      {
        type: 'heading',
        text: 'What Landed on the Machine',
      },
      {
        type: 'paragraph',
        text: 'The exploit carried a small downloader. Gen traced it pulling three files from a server on Alibaba Cloud in Hong Kong: a legitimate copy of 7-Zip, a malicious DLL, and an encrypted file holding the final payload. All three went into C:\\Users\\Public\\Documents. The malicious DLL was saved under the name 7-Zip loads from its own folder at startup, so running 7-Zip loaded the attacker\'s code instead.',
      },
      {
        type: 'paragraph',
        text: 'The archive command the attackers ran was meaningless. Its only job was to start 7-Zip. The DLL counts the processes running on the computer before it decrypts anything. If it finds fewer than 50, it builds the wrong key and the payload turns to garbage. Automated malware-analysis systems tend to run few processes. Real desktops do not. It then deletes itself. Gen found it moving its own contents into an NTFS alternate data stream, a hidden part of the file record, and then marking the file for deletion. The file leaves the disk with no delete call in the behavior logs.',
      },
      {
        type: 'paragraph',
        text: 'What it leaves behind is GRAYRABBIT. The backdoor reaches its server at mail.uaiubifas[.]top on port 443, and the traffic there is plain TCP scrambled with RC4 rather than TLS. Port 443 typically carries TLS, so non-TLS traffic on that port is worth watching.',
      },
      {
        type: 'heading',
        text: 'What Tencent Fixed, and What It Left',
      },
      {
        type: 'paragraph',
        text: 'Gen reported the flaw to Tencent on April 9, 2026, and it is tracked as CVE-2026-51990. Tencent replied the next day and confirmed on April 21 that a fix was complete and would go out to all users via an automatic update in version 16.3.0.3498. That is 12 days. The whole fix sits in biz_helper.exe. It now looks for the two arguments that carry web addresses, rejects anything that is not HTTPS, and checks the hostname against four allowed endings: sogou.com, qq.com, woa.com and sogou. Gen says more checks were added after that.',
      },
      {
        type: 'paragraph',
        text: 'The browser engine was not touched. In the patched files Gen examined, the sandbox setting is still off, the web security flag is still written into the code, and the same switches are still applied. The engine is still Chromium 80. What has changed is that an outsider can no longer point it at an address of their choosing via the link handler. Gen said those components need more work.',
      },
      {
        type: 'heading',
        text: 'What to Do',
      },
      {
        type: 'paragraph',
        text: 'Update Sogou Input Method. The fix is in version 16.3.0.3498, which Gen says Tencent pushed to all users by automatic update on April 21, 2026. Two things are missing from the public record. Neither Gen nor Tencent has said which versions were affected, and neither explains how to check the version installed on a machine. If a machine may have been reached before the fix, look for the indicators below. The loader deletes itself, so the malicious DLL may no longer be on disk. No source says whether installing the fix removes a backdoor that is already running. Gen published the following indicators.',
      },
      {
        type: 'bullet',
        text: 'SHA-256 29c7ee41d0cc9e07d981e451df56d0c3d37c41ac4ec10c7b516cc033ee397a63 — malicious DLL loader, written to disk as 7z.dll',
      },
      {
        type: 'bullet',
        text: 'SHA-256 749160a2f20f82744026719cf72e483595c6aad718efa74d675a98662e02422e — encrypted payload file, named p',
      },
      {
        type: 'bullet',
        text: 'SHA-256 d7a3c7eb94edc0e020f74c678743d71d61e944634aade4a67a96c3589e828b3a — GRAYRABBIT backdoor, internal name core.dll',
      },
      {
        type: 'bullet',
        text: 'Domain mail.uaiubifas[.]top — backdoor command server, port 443',
      },
      {
        type: 'bullet',
        text: 'Domain noht1ng[.]top — hosted the exploit page',
      },
      {
        type: 'bullet',
        text: 'IP 8.218.50[.]207 — staging server, Alibaba Cloud Hong Kong',
      },
      {
        type: 'bullet',
        text: 'Path C:\\Users\\Public\\Documents\\ — where the three files were written',
      },
    ],
  },

  {
    id: 'cisco-fmc-qilin-ransomware',
    category: 'RANSOMWARE',
    title: 'Cisco FMC Flaws Exploited to Steal Credentials and Deploy Qilin Ransomware',
    description:
      'Three threat clusters tied to ransomware and state-sponsored actors have exploited two Cisco Secure Firewall Management Center vulnerabilities, Cisco Talos reports.',
    date: 'September 2026',
    tag: 'RANSOMWARE',
    content: [
      {
        type: 'paragraph',
        text: 'Cisco has revealed that three distinct threat clusters linked to ransomware and state-sponsored attacks have been exploiting two recently patched Secure Firewall Management Center (FMC) vulnerabilities. The attacks leverage CVE-2026-20079 (CVSS score: 10.0), an authentication bypass vulnerability in the web interface of FMC software that could allow an unauthenticated, remote attacker to bypass authentication and execute script files on an affected device to obtain root access to the underlying operating system.',
      },
      {
        type: 'paragraph',
        text: 'The second flaw under exploitation is CVE-2026-20316 (CVSS score: 5.3), which could allow an unauthenticated, remote attacker to log in to an affected device using a low-privilege account to access sensitive data within susceptible systems. It can be paired with other Cisco Secure FMC vulnerabilities to elevate privileges. Cisco Talos said it identified three clusters of post-compromise activity of FMC instances associated with state-sponsored and crimeware threat actors. These include:',
      },
      {
        type: 'bullet',
        text: 'UAT-12197, which has exploited CVE-2026-20079 to deploy JSP-based web shells and a Java Archive (JAR)-based command executor to query internal databases and obtain user authentication data and credentials',
      },
      {
        type: 'bullet',
        text: 'UAT-11823, which has exploited both CVE-2026-20079 and CVE-2026-20316 to deliver a Netcat-based reverse shell, two bash scripts to harvest managed-device configurations, and a variant of Cyclops Blink, a modular ELF implant previously attributed to the Russian state-sponsored hacking group Sandworm',
      },
      {
        type: 'bullet',
        text: "UAT-11988, a ransomware operation that has exploited CVE-2026-20316 for initial access and then used legitimate built-in FMC tooling as part of a living-off-the-land (LotL) attack to conduct extensive reconnaissance of the victim's environment, drop tunneling tools to maintain network access, collect credentials, build a target list of endpoints to encrypt, terminate security tools, and deploy Qilin ransomware on selected systems.",
      },
      {
        type: 'paragraph',
        text: '"Customers are strongly advised to apply hotfixes for affected software versions already released by Cisco for CVE-2026-20079 and CVE-2026-20316," Cisco said, adding it intends to ship a comprehensive hardening release for various internally discovered vulnerabilities next week.',
      },
      {
        type: 'paragraph',
        text: 'The development comes as the U.S. Cybersecurity and Infrastructure Security Agency (CISA) added CVE-2026-20079 to its Known Exploited Vulnerabilities (KEV) catalog, requiring Federal Civilian Executive Branch (FCEB) agencies to apply the patches by September 12, 2026. The second vulnerability, CVE-2026-20316, was added to the KEV catalog in late July 2026.',
      },
    ],
  },

  {
    id: 'gigabud-android-work-profiles',
    category: 'MOBILE SECURITY',
    title: 'Gigabud Creates Android Work Profiles to Hide From Banking App Malware Checks',
    description:
      "The Gigabud banking trojan now installs a companion app, Vwork, that creates an Android work profile to hide a tampered banking app from malware checks, Group-IB reports.",
    date: 'September 2026',
    tag: 'ANDROID',
    content: [
      {
        type: 'paragraph',
        text: "The Gigabud banking trojan now installs a second Android app that creates a work profile on an infected phone and drops a tampered banking app inside it, security firm Group-IB said in a report published on September 9. A work profile is a separate space that Android typically reserves for employer apps, and what's inside it is kept separate from everything in the personal space. That split hides the trojan from the banking app's own malware checks, Group-IB said, so a fraudulent payment can look unrelated to the alert already raised on the phone. It has confirmed the full chain on infected devices in Indonesia.",
      },
      {
        type: 'paragraph',
        text: "Android's platform documentation says any app in the phone's main profile can start the setup for a work profile, and that the user is told what a work profile does before one is created. Group-IB said banking apps carry security code that looks for known malware on the phone. From inside a work profile, that scan does not reach the personal space where the trojan sits.",
      },
      {
        type: 'paragraph',
        text: 'Gigabud is a remote access trojan, malware that hands its operator live control of the phone. It has been active since 2022 and links it to a group it calls GoldFactory, which reaches phones as a fake app posing as a national airline, a tax office, or a government portal, installed from outside the official store. On first launch, it asks for Accessibility access, permission to draw over other apps, and permission to keep running in the background to save battery. Giving it Accessibility access is the point where the operator gains real control of the device.',
      },
      {
        type: 'paragraph',
        text: "It then sends the operator a list of every app on the phone so that banking targets can be identified. When the victim opens their real banking app, a fake login screen appears on top and captures their keystrokes. A second overlay, invisible to the user, takes the phone's lock screen code. Group-IB said the operator can run transactions on the victim's phone by tapping and typing through Accessibility, while a black screen covers what is happening.",
      },
      {
        type: 'paragraph',
        text: "That second app is called Vwork. Group-IB said its architecture and class names match Shelter, an open-source tool that uses the same work profile feature to let a phone's owner isolate or duplicate apps. The difference is who is in control. Shelter is worked by hand, by the person holding the phone. Vwork opens the same jobs to other apps: set up a work profile, clone an app into it, list what is in there, and open an app inside.",
      },
      {
        type: 'paragraph',
        text: "Group-IB said the checks that stopped other apps from calling those functions have been taken out, so any app on the device can drive Vwork. Before it clones anything, Vwork asks an external server for permission, and Gigabud carries commands written specifically for it. Shelter walks a user through several screens before creating a profile. Vwork cuts that down to a single prompt, written in Chinese, Group-IB said. On devices in Indonesia, Group-IB said, the installs arrived in order: Gigabud first, Vwork within minutes, then the tampered banking app.",
      },
      {
        type: 'paragraph',
        text: 'In the one case the report describes in detail, what went into the profile was not a duplicate of the victim\'s own banking app. Group-IB said, "the copy was a fake version of a real Indonesian bank\'s app." Group-IB analyzed a single Vwork sample and described it as still under active development. Some of the added functions are unstable and do not behave as intended on Android builds close to the open-source version. The report does not say which phones or Android versions the technique does work on.',
      },
      {
        type: 'paragraph',
        text: 'Gigabud samples built to work with Vwork have been found aimed at Brazil, Colombia, Egypt, Indonesia, Laos, Mexico, Morocco, the Philippines, Thailand, Türkiye, and one Gulf Cooperation Council country that Group-IB did not name. Those are samples, not confirmed infections. Only the Indonesian chain has been confirmed.',
      },
      {
        type: 'paragraph',
        text: "Between February and July 2026, Group-IB counted about 1,469 compromised devices and 1,281 possibly compromised logins in Indonesia, with estimated losses of about $960,000. The counts cover what Group-IB itself observed rather than the country as a whole, and it said they show observed activity and should not be read as the full picture. It did not say how many of those devices had Vwork on them. Group-IB links both tools to GoldFactory. It pointed to a branch of Vwork's code that references Gigabud package names, network indicators the two share, and developer logs written in Chinese, and said it cannot publish those indicators.",
      },
      {
        type: 'heading',
        text: 'Checking a Phone for a Work Profile',
      },
      {
        type: 'paragraph',
        text: "The work profile itself shows up in the phone's settings. Google's guidance for Android users outlines where to find it and how to delete it.",
      },
      {
        type: 'bullet',
        text: 'Open Settings, then Passwords and accounts. A Work tab appears there if the phone has a work profile.',
      },
      {
        type: 'bullet',
        text: 'Apps within a work profile display a small briefcase badge on their icons.',
      },
      {
        type: 'bullet',
        text: 'To delete it, open the Work tab, choose Remove Work Profile, then Delete. Google says this removes everything stored inside the profile.',
      },
      {
        type: 'bullet',
        text: 'Check that the app that set the profile up is gone. Group-IB said Vwork keeps its icon out of the app launcher, though it still shows up in a file manager.',
      },
      {
        type: 'paragraph',
        text: "Google's steps assume the phone belongs to the person using it, because the user cannot remove a profile an employer owns. Group-IB's report does not say whether deleting the profile ends the risk while Gigabud is still installed in the personal space. Group-IB's advice to users is to install apps only from official stores, to refuse Accessibility access to any app that is not an accessibility tool, and to use a second factor for banking apps that does not rely on SMS.",
      },
      {
        type: 'paragraph',
        text: "For banks, the signs it lists are things the phone does rather than known malware files: a work profile appearing on an ordinary consumer phone that nobody set up, the same banking app showing install markers in both profiles, a profile holding none of the apps a person would normally have, and Accessibility switched on for an app with no reason to need it. Vwork was found during earlier Group-IB research into GoldFactory's campaign of tampered banking apps in Southeast Asia, published in December 2025. Group-IB said Vwork has been seen in the wild only in that campaign.",
      },
      {
        type: 'paragraph',
        text: 'Putting a banking app inside a container to get around its defenses is not new. Promon described FjordPhantom in 2023, which ran a real banking app inside a virtual container so it could change how the app behaved from the inside. That worked by breaking the wall Android puts between apps. Vwork does close to the reverse, using a wall Android already provides to put the Trojan beyond the checks Group-IB described.',
      },
    ],
  },

  {
    id: 'gitlab-cvss-10-file-read',
    category: 'VULNERABILITIES',
    title: 'GitLab CVSS 10 File-Read Flaw Draws In-the-Wild Probes After Disclosure',
    description:
      "A maximum-severity path traversal flaw in GitLab's repository commits API is already being probed in the wild, watchTowr reports.",
    date: 'September 2026',
    tag: 'GITLAB',
    content: [
      {
        type: 'paragraph',
        text: 'GitLab has released patches to address multiple flaws, including a maximum-severity security vulnerability that has witnessed in-the-wild probes within hours of public disclosure. The vulnerability in question is CVE-2026-85706 (CVSS score: 10.0), a path traversal issue in the repository commits API that could allow an unauthenticated user to read arbitrary files from the GitLab server under certain conditions.',
      },
      {
        type: 'paragraph',
        text: 'The problem, per GitLab, stems from "improper path confinement and missing authentication enforcement in the repository commits API." The issue impacts the following versions of GitLab Community Edition (CE) and Enterprise Edition (EE):',
      },
      {
        type: 'bullet',
        text: 'All versions from 18.7 before 19.1.8',
      },
      {
        type: 'bullet',
        text: 'All versions from 19.2 before 19.2.6',
      },
      {
        type: 'bullet',
        text: 'All versions from 19.3 before 19.3.2',
      },
      {
        type: 'paragraph',
        text: 'According to preemptive exposure management firm watchTowr, the vulnerability is already witnessing active in-the-wild probes since 06:00 UTC on September 11, 2026. The issue, it said, allows an external attacker to read log files and GitLab-specific configuration files to obtain credentials, secrets, and sensitive information.',
      },
      {
        type: 'paragraph',
        text: '"This is the second instance of a critical severity GitLab vulnerability in recent weeks, following the previous GraphQL code injection (CVE-2026-19478) that was almost immediately actively exploited," Jake Knott, head of threat intelligence at watchTowr, said in a statement shared with The Hacker News. "Exploitation requires just one requirement, at least one public project must exist."',
      },
      {
        type: 'paragraph',
        text: '"The appeal to attackers of GitLab is obvious, as unauthorized access allows an attacker to gain access to source code, CI/CD secrets, credentials, and the ability to inject code into build pipelines, gaining access or poisoning anything downstream of it, which as we\'ve seen throughout this year has been a favorite of attackers."',
      },
      {
        type: 'paragraph',
        text: 'Also patched by GitLab in versions 19.3.2, 19.2.6, and 19.1.8 is a critical insecure deserialization bug in GitLab EE (CVE-2026-87719, CVSS score: 9.9) that could result in information disclosure. The vulnerability could allow an authenticated user with Duo Chat access to obtain Advanced Search instance configurations and sensitive credentials using a specially crafted GraphQL subscription argument to bypass serialization and perform server object lookup, GitLab said.',
      },
      {
        type: 'paragraph',
        text: 'Organizations running self-managed GitLab instances that are exposed to the internet must apply the patches as soon as possible, or limit public access, if not required.',
      },
      {
        type: 'paragraph',
        text: '"Based on the history, the transition of this vulnerability to indiscriminate mass exploitation is likely not far away, and defenders have limited time to act," Knott said. "Where possible, organizations should also review log files for HTTP POST requests to \'/api/v4/projects/{id}/repository/commits/\' URIs containing \'file.Path\' parameters to identify potential exploitation attempts."',
      },
    ],
  },

  {
    id: 'papercut-actively-exploited-flaws',
    category: 'ENTERPRISE SECURITY',
    title: 'PaperCut Replaces Emergency Patches With Fixes for Two Actively Exploited Flaws',
    description:
      'PaperCut released maintenance releases superseding emergency patches for two actively exploited vulnerabilities used to bypass authentication and execute code.',
    date: 'September 2026',
    tag: 'EXPLOITATION',
    content: [
      {
        type: 'paragraph',
        text: 'PaperCut on Thursday released a new security maintenance release that replaces all previously published emergency patches that were pushed to address two security flaws that have come under active exploitation. The software development company said PaperCut NG/MF versions 26.0.5, 25.0.13 and 24.1.10 are now available for customers to download.',
      },
      {
        type: 'paragraph',
        text: '"These are Regular Maintenance Releases (MR) that have gone through complete QA testing," it said. "They contain all of the security fixes issued in Emergency Patch Releases 1, 2 and 3, plus additional security hardening, and they have been through our standard release testing process." It\'s worth noting that the release supersedes the emergency patches that were shipped to address two security flaws as well as two regressions, along with various hardening and mitigation against potential attack chains.',
      },
      {
        type: 'paragraph',
        text: 'The vulnerabilities, CVE-2026-81578 and CVE-2026-82078, have come under active exploitation in the wild to bypass authentication and execute arbitrary code on susceptible instances. In one case highlighted by GreyNoise and Blackpoint Cyber, a suspected Russian-speaking threat actor has been found weaponizing the two flaws to break into at least 395 organizations in 48 countries, most of them concentrated in the U.S. education sector.',
      },
      {
        type: 'paragraph',
        text: 'The attacks used hundreds of AI agents, powered by OpenAI\'s Codex harness and a DeepSeek model, to target organizations at scale, while avoiding entities in Russia, China, Hong Kong, Thailand, Iran, and 23 other countries. The activity originates from the IP address "45.142.193[.]132."',
      },
      {
        type: 'paragraph',
        text: '"It is unclear if this actor is solely focused on access development to be handed off to other affiliated actors or if they will directly leverage their accesses to achieve follow-on objectives such as data theft or ransomware deployment," GreyNoise said. In light of active exploitation efforts, it\'s imperative that users apply the latest fixes for optimal protection. PaperCut customers running an emergency patch build are advised to move to a maintenance release.',
      },
    ],
  },

  {
    id: 'russian-hackers-claude-malware',
    category: 'AI SECURITY',
    title: 'Russian State-Sponsored Hackers Use Claude to Rebuild Malware After Detection',
    description:
      'Anthropic disrupted a Russian state-sponsored campaign, GTG-20006, that used Claude to automatically rebuild and redeploy malware once it was detected.',
    date: 'September 2026',
    tag: 'AI + MALWARE',
    content: [
      {
        type: 'paragraph',
        text: 'Anthropic on Thursday revealed it disrupted a campaign mounted by a Russian state-sponsored threat actor that abused Claude for developing an AI-assisted workflow to get ahead of the detection curve. The operation has been attributed to a cyber espionage group it calls GTG-20006 (where "GTG" stands for Generative Threat Group), which aligns with broader reporting linking the cluster to Midnight Blizzard (aka APT29 and Cozy Bear).',
      },
      {
        type: 'paragraph',
        text: 'This actor is said to have developed an AI-driven process to automatically rebuild and re-deploy their toolkit if it was detected by security products, thereby undermining defenders\' ability to block the artifacts via static detections. Attacks mounted by GTG-20006 have targeted military intelligence targets in Ukrainian and European governments, along with diplomatic and defense organizations and individuals connected to U.S. foreign policy. The toolkit includes a number of programs:',
      },
      {
        type: 'bullet',
        text: 'Two Windows-based implants',
      },
      {
        type: 'bullet',
        text: 'A mobile exploitation kit',
      },
      {
        type: 'bullet',
        text: 'A credential stealing tool that targets browser password stores',
      },
      {
        type: 'bullet',
        text: 'A phishing platform designed to mimic priority targets like government organizations',
      },
      {
        type: 'bullet',
        text: 'An administrative console used to manage compromised accounts',
      },
      {
        type: 'paragraph',
        text: '"The actor also used AI to monitor how well their tools evaded detections from known security defenses," Anthropic explained. "If their monitoring AI agents identified that any of their deployed malware was detected by a security product, agents would then set about the process of autonomously modifying and rebuilding the malware to evade the existing detections."',
      },
      {
        type: 'paragraph',
        text: 'Once the artifacts can bypass detection, they are staged on disposable hosting servers to which victims are redirected to so as to retrieve the malware via phishing, ClickFix, and DNS hijacking schemes. The threat actor has also been observed using AI workflows to register domains, set up the hosting infrastructure used to send phishing emails, as well as to deliver the messages and monitor command-and-control (C2) channels for successful compromises.',
      },
      {
        type: 'paragraph',
        text: 'More than 20 distinct organizations were singled out over the course of the reconnaissance and live operations. This included government ministries, defense and intelligence bodies, embassies and diplomatic missions, think tanks, and defense-industrial companies, mainly in Ukraine and Europe. The attacks also extended to the Middle East and maritime-related government agencies in Asia.',
      },
      {
        type: 'paragraph',
        text: 'These efforts also overlapped with a campaign dubbed CaptiveCrunch that was documented in July and August 2026 by ReliaQuest, Microsoft, Google, and Lumen Black Lotus Labs. "The actor compromised at least three hospitality vendors that operate hotel guest Wi-Fi," Anthropic said. "They used compromised admin credentials to modify DNS records so that they pointed to services owned by the actor (a technique known as DNS hijacking). Guests of hotels using the compromised vendors who connected to the hotel Wi-Fi had their traffic, device identifier, and IP address sent to the actor\'s servers."',
      },
      {
        type: 'paragraph',
        text: 'In the next stage, victims were served ClickFix-style lures to deliver Windows, Android, and iOS malware tailored to their device:',
      },
      {
        type: 'bullet',
        text: 'Windows — PowerChrome, WUEngine, Shadow C2, MiniPlasma, CloudSyncSvc',
      },
      {
        type: 'bullet',
        text: 'Android — GiftDrop, a rebranded version of GiftsExpress Android surveillance RAT',
      },
      {
        type: 'bullet',
        text: 'iOS — DarkSword',
      },
      {
        type: 'paragraph',
        text: 'Furthermore, the threat actor has been found to use data stolen from the hotel management systems and the individual guests\' devices to identify additional targets, particularly individuals associated with Ukraine, such as government officials and drone manufacturers. This is complemented by attempts to take over victims\' WhatsApp accounts using headless browsers to link victim accounts as companion devices and ultimately bulk-exporting Russian and Ukrainian language conversations from them while suppressing read receipts.',
      },
      {
        type: 'paragraph',
        text: '"The actor also targeted surveillance platforms," Anthropic said. "They found authorization flaws in the application interface of camera streaming services, and from there they enumerated users and harvested tokens that granted them access to the victims\' live camera streams." GTG-20006 has been attributed to an intrusion targeting a North African government technology authority, leveraging credentials to a VPN appliance to hijack the central account server and exfiltrate the entire credential database consisting of over 300,000 national identity records and the commercial registry data of more than half a million companies operating in the country.',
      },
      {
        type: 'paragraph',
        text: 'Also developed by the threat actor is a cloud email espionage platform, which used a device code phishing framework codenamed Embassy Kit to orchestrate a Microsoft 365 token theft campaign targeting diplomatic and government personnel, resulting in the unauthorized access and exfiltration of mail records from at least eight organizations, including a national prosecutor\'s office, a military education institute, and a regional intergovernmental organization.',
      },
      {
        type: 'paragraph',
        text: 'The threat actor has also been observed delivering Windows credential stealers via fake update-themed social engineering lures, along with auxiliary tools for facilitating remote access and tampering with the victim machine\'s security updates so that the artifacts remain undetected. "The actor used AI at every point in their operations," Anthropic said. "In on-premises environments, the actor used AI to monitor the stealth and persistence of their implants. The result of the above is that AI has inverted the cost back onto defenders. Previously, defenders might have been able to slow an attacker\'s operational tempo via the deployment of a new detection."',
      },
    ],
  },

  {
    id: 'critical-vulnerabilities-biggest-risk',
    category: 'SECURITY RESEARCH',
    title: 'Your Critical Vulnerabilities Might Not Be Your Biggest Risk',
    description:
      'Autonomous penetration testing reveals which vulnerabilities create real attack paths to compromise, beyond what severity scores alone can show.',
    date: 'September 2026',
    tag: 'RISK',
    content: [
      {
        type: 'paragraph',
        text: 'Security teams have become exceptionally talented at finding vulnerabilities. Now, it\'s time to turn our attention to optimizing the process for determining which of those vulnerabilities actually create a path to compromise. A critical vulnerability may look alarming on a scanner report, but if it sits behind strong segmentation, identity controls, and other defenses that prevent an attacker from reaching anything important, then it doesn\'t necessarily need immediate attention. On the other hand, a medium-severity vulnerability may appear less important, but if it can be used to provide a foothold that can be chained with other weaknesses to reach sensitive data or privileged systems, then fixing that gap becomes a priority.',
      },
      {
        type: 'heading',
        text: 'How Autonomous Penetration Testing Reveals What Attackers Can Actually Exploit',
      },
      {
        type: 'paragraph',
        text: "Severity scores tell you what vulnerabilities could mean in isolation. Autonomous penetration testing tells you what an attacker can actually do with the vulnerabilities. The security industry has been moving toward continuous validation because point-in-time assessments and periodic vulnerability scanning can't fully account for complex environments that change every day. The missing piece to continuous security testing has been an execution model capable of performing meaningful penetration testing on an ongoing basis and at scale. Autonomous penetration testing is the missing execution layer for continuous security validation.",
      },
      {
        type: 'heading',
        text: 'Why Autonomous Penetration Testing Looks Beyond Vulnerability Severity',
      },
      {
        type: 'paragraph',
        text: "Vulnerability severity remains useful because security teams need a consistent way to understand the potential impact of a vulnerability and prioritize remediation. But today, we can't analyze severity in a vacuum.",
      },
      {
        type: 'bullet',
        text: 'Consider a critical vulnerability on an isolated system with strong access controls and no viable route to sensitive assets.',
      },
      {
        type: 'bullet',
        text: 'Now consider a medium-severity vulnerability on an internet-facing application that provides access to credentials, excessive permissions, and a poorly segmented internal environment.',
      },
      {
        type: 'paragraph',
        text: 'The second vulnerability may represent more actionable risk because attackers look for opportunities to gain access, escalate privileges, move laterally, bypass controls, and reach something valuable. This expertise was once exclusive to skilled threat actors, but the use of AI is lowering the knowledge barrier for bad actors to conduct cyberattacks. Attack path validation provides the missing context. Rather than asking only whether a vulnerability exists, autonomous penetration testing performs attack path validation to ask whether it can be reached, exploited, chained with other weaknesses, and used to advance toward a meaningful objective.',
      },
      {
        type: 'paragraph',
        text: 'The latest autonomous pentesting capabilities are no longer an advantage reserved for large security teams with deep budgets. By shifting a security strategy from reactive remediation to proactive validation, organizations of all sizes can continuously test their environments, prioritize the risks that matter, and prove where attackers could actually gain ground.',
      },
      {
        type: 'heading',
        text: 'Why Autonomous Penetration Testing Is Replacing Point-in-Time Testing',
      },
      {
        type: 'paragraph',
        text: "Traditional penetration testing earns its value from human expertise. An experienced pentester can reason through complex scenarios, chain multiple vulnerabilities, test business logic, and determine whether a theoretical weakness can become a real compromise. That expertise remains invaluable. What's changing now is the environment that security testing has to keep up with.",
      },
      {
        type: 'paragraph',
        text: "In a typical process, a penetration test happens, a report is delivered, and the organization begins remediation. Then, the environment continues to change. Cloud infrastructure is modified. Applications are deployed. Identities are created and removed. Configurations drift. New assets appear. Security controls change. New vulnerabilities emerge. The assessment may have been accurate when it was performed, but the environment it described may no longer exist weeks or months later. Point-in-time pentesting is becoming insufficient as the only mechanism for validating security posture. The answer isn't necessarily more annual penetration tests. It's a testing model capable of keeping pace with the ongoing change of the environment itself. That's where autonomous penetration testing levels the playing field.",
      },
      {
        type: 'heading',
        text: 'Autonomous Penetration Testing Makes Continuous Penetration Testing Possible',
      },
      {
        type: 'paragraph',
        text: 'Continuous security validation has been on the radar for a while. Continuous attack surface management, continuous vulnerability discovery, continuous control validation, and continuous exposure management all reflect the same underlying realization that security teams need to know what is true about their environments in real time.',
      },
      {
        type: 'paragraph',
        text: 'The challenge has always been execution. Offensive security professionals bring judgment and creativity developed through years of hands-on experience. But there are practical limits to how many applications, network segments, identities, attack paths, and security controls a human team can test on an ongoing basis. Autonomous penetration testing gives continuous testing the execution model it has been missing.',
      },
      {
        type: 'paragraph',
        text: 'Instead of waiting for the next scheduled penetration test, organizations can schedule tests of environments on demand, as they change. They can retest after remediation, validate new attack paths, repeat attack scenarios, and determine whether security controls continue to perform as expected. Continuous penetration testing is more than running a vulnerability scanner more frequently; it requires the ability to perform meaningful offensive security testing continuously.',
      },
      {
        type: 'heading',
        text: 'Automated Vulnerability Scanning vs. Autonomous Penetration Testing',
      },
      {
        type: 'paragraph',
        text: 'Automation and autonomy are not the same thing. Automated vulnerability scanning is designed to identify known weaknesses. Scanners can continuously inspect environments, match vulnerabilities against databases and signatures, and provide valuable visibility into what has changed. But finding a vulnerability is different from proving that an attacker can use it.',
      },
      {
        type: 'paragraph',
        text: 'Autonomous penetration testing goes further than vulnerability scanning. An autonomous penetration testing platform can perform reconnaissance, determine what to test next, chain individual weaknesses, test authentication and authorization logic, attempt exploitation, pivot through an environment, and pursue an attack objective. The difference is that automated scanning identifies possibilities, while autonomous penetration testing produces evidence.',
      },
      {
        type: 'heading',
        text: 'Autonomous Penetration Testing at Senior-Pentester Skill',
      },
      {
        type: 'paragraph',
        text: "The interesting development in autonomous penetration testing isn't that AI can automate individual pentesting tasks. That has been true for some time. The more significant shift is that autonomous penetration testing has reached a point where it can reason through multi-step attack scenarios at a depth historically associated with experienced human penetration testers. Rather than stopping at individual findings, it can analyze how weaknesses interact and determine whether they can be combined into a viable path to compromise. That includes testing business logic, chaining vulnerabilities, and assessing what happens after initial access. Autonomous systems can pivot across environments, escalate privileges, move laterally, and pursue a defined attack objective based on what they discover. This is what makes autonomous penetration testing relevant to the industry's shift toward continuous security validation. The goal is to continuously test whether an attacker can actually achieve something that matters.",
      },
      {
        type: 'heading',
        text: 'Breach360 Is Autonomous Penetration Testing Built for Continuous Security Validation',
      },
      {
        type: 'paragraph',
        text: 'Breach360 by BreachLock was built around the premise that autonomous penetration testing needs to combine the depth of senior-level offensive security expertise with the scalability required for continuous testing. The platform is trained on intelligence from more than 40,000 real-world penetration testing engagements, giving its autonomous testing capabilities a foundation in real-world offensive security rather than purely simulated scenarios. Breach360 can autonomously:',
      },
      {
        type: 'bullet',
        text: 'Conduct reconnaissance',
      },
      {
        type: 'bullet',
        text: 'Identify attack opportunities',
      },
      {
        type: 'bullet',
        text: 'Chain vulnerabilities',
      },
      {
        type: 'bullet',
        text: 'Test business logic',
      },
      {
        type: 'bullet',
        text: 'Validate authentication and authorization',
      },
      {
        type: 'bullet',
        text: 'Pivot across network segments',
      },
      {
        type: 'bullet',
        text: 'Perform lateral movement',
      },
      {
        type: 'bullet',
        text: 'Map attack paths',
      },
      {
        type: 'bullet',
        text: 'Validate exploitability',
      },
      {
        type: 'bullet',
        text: 'Generate evidence of compromise',
      },
      {
        type: 'paragraph',
        text: 'Rather than leaving security teams with another growing list of theoretical vulnerabilities, Breach360 provides evidence of which exposures can actually be exploited and how those exposures connect along an attack path. That allows teams to focus remediation on vulnerabilities that create meaningful pathways to compromise.',
      },
      {
        type: 'heading',
        text: 'Autonomous Penetration Testing Still Needs Human Judgment',
      },
      {
        type: 'paragraph',
        text: 'Autonomous execution and autonomous accountability are two different things. Technology can discover attack paths, validate exploits, generate evidence, and repeat tests at a scale no human team could match. Human security professionals still provide the context that determines what the evidence means for the business. They determine:',
      },
      {
        type: 'bullet',
        text: 'Which attack path creates the greatest business risk',
      },
      {
        type: 'bullet',
        text: 'Which remediation effort should take priority',
      },
      {
        type: 'bullet',
        text: 'Which operational constraints matter',
      },
      {
        type: 'bullet',
        text: 'Which regulatory obligations apply',
      },
      {
        type: 'bullet',
        text: 'What level of residual risk is acceptable',
      },
      {
        type: 'bullet',
        text: 'When deeper expert-led testing is warranted',
      },
      {
        type: 'paragraph',
        text: "That division of responsibility is what makes autonomous security testing practical for real-world environments. The goal isn't to remove humans from security testing. It's to stop using human expertise for work that machines can now perform continuously, while preserving human judgment for decisions that require context and accountability.",
      },
      {
        type: 'heading',
        text: 'The Future of Penetration Testing Is Autonomous and Continuous',
      },
      {
        type: 'paragraph',
        text: "The security industry has spent years moving toward continuous security validation, recognizing that periodic vulnerability scans and point-in-time penetration tests can't fully represent the risk of environments that change constantly. What has been missing is the ability to perform quality penetration testing continuously and at scale. Autonomous penetration testing provides that capability by bringing multi-step reasoning, exploitation, attack-path validation, and security-control testing into a continuous operating model.",
      },
      {
        type: 'paragraph',
        text: "For security teams, the goal is no longer simply to understand how many vulnerabilities exist or how severe they appear in isolation. It has shifted to continuously validate which exposures represent a credible path to compromise and focus remediation where it can have the greatest impact. After all, your most critical vulnerability might not be your biggest risk.",
      },
      {
        type: 'subheading',
        text: 'About BreachLock',
      },
      {
        type: 'paragraph',
        text: 'BreachLock is a global leader in offensive security, delivering scalable and continuous security testing. Trusted by global enterprises, BreachLock provides human-led and AI-powered Attack Surface Management, Penetration Testing as a Service (PTaaS), Red Teaming, and Adversarial Exposure Validation (AEV) solutions that help security teams stay ahead of adversaries. With a mission to make proactive security the new standard, BreachLock is shaping the future of cybersecurity through automation, data-driven intelligence, and expert-driven execution.',
      },
    ],
  },

  {
    id: 'google-play-early-access-deceptive-apps',
    category: 'MOBILE SECURITY',
    title: 'Google Play Early Access Abused to Push Thousands of Deceptive Android Apps',
    description:
      "Bad actors are misusing Google Play's Early Access program, which lacks public reviews, to push thousands of deceptive apps promising rewards, casino winnings, and premium content.",
    date: 'September 2026',
    tag: 'GOOGLE PLAY',
    content: [
      {
        type: 'paragraph',
        text: "Bad actors are misusing Google Play's Early Access program to push deceptive apps that claim to offer money, rewards, casino winnings, and premium content. Early Access apps are apps that haven't been released on the official Android app marketplace. The main idea behind the program is for developers to solicit user feedback for new applications or features they may be working on before their release.",
      },
      {
        type: 'paragraph',
        text: 'One aspect worth highlighting is that users cannot leave public reviews or star ratings for apps that are available in Early Access. This has opened the door to a new kind of abuse where threat actors are pushing thousands of Early Access applications with deceptive content, including fake casino games and reward apps, as well as misleading utilities and titles that may infringe on third-party trademarks. Among the identified apps is a Grand Theft Auto imitator named "Vice Streets: Open World" (APK package: com.gamblechaos.withfriends.game), which has more than 1 million downloads. The game has no reviews or ratings. It\'s currently no longer available on the Google Play Store, although it\'s not clear if it was taken down by Google or by the uploader themselves.',
      },
      {
        type: 'paragraph',
        text: '"The same feature that shields developers from unfair criticism also strips users of the earliest warning that an app cannot be trusted," Bitdefender said in a statement. Because users cannot leave critical reviews or poor ratings, the traditional trust signals no longer apply, allowing such apps to gain traction. These apps are said to be promoted through TikTok, Facebook, and other social media platforms using bogus ads that include videos featuring celebrity deepfakes generated using artificial intelligence (AI).',
      },
      {
        type: 'paragraph',
        text: '"A recurring pattern among suspicious Early Access apps involves promising cash rewards, PayPal payouts, cryptocurrency earnings, gift cards, free spins or casino jackpot," the Romanian cybersecurity company said in a report shared with The Hacker News. "Many of these applications rely on the same engagement loop. The user installs the app after watching an advertisement on TikTok or Facebook. They might even receive generous virtual rewards almost immediately, but when they reach a withdrawal threshold, progression slows dramatically. The promised payout will never arrive."',
      },
      {
        type: 'paragraph',
        text: 'The end goal is to generate illicit revenue by serving ad after ad. Another advantage that these Early Access casino-oriented apps have is that they allow them to sidestep many of the regulatory requirements legitimate gambling applications are required to comply with. To get around the licensing, geofencing, and age verification restrictions, the casino-style apps masquerade as casual slot and puzzle games and are aggressively promoted via ads on social media platforms that lead unsuspecting users to Early Access apps in the Google Play Store or directly to various gambling websites.',
      },
      {
        type: 'paragraph',
        text: 'Further analysis indicates that the lures used for these apps go beyond casino games, slot machines, and fake reward apps to include PDF readers, QR scanners, phone trackers, utility apps, and trademark-themed games.',
      },
      {
        type: 'paragraph',
        text: '"Google\'s Early Access program remains a valuable tool for developers testing new ideas," Bitdefender said. "Removing the comments and ratings protects legitimate developers from unfair review bombing, but it also removes one of the community\'s strongest defenses against deceptive software." The Hacker News has contacted Google for comment, and we will update the story if we hear back. The disclosure coincides with the emergence of multiple malware families targeting Android:',
      },
      {
        type: 'bullet',
        text: 'Hagaseca, a remote access trojan spread via the THost9 loader that contains a worm component, which scans exposed Android Debug Bridge (ADB) services and installs the malware for persistence and remote control through shell execution, file transfers, tunneling, and downloadable modules.',
      },
      {
        type: 'bullet',
        text: 'Mantax Otax, a hybrid mobile malware that brings together comprehensive spyware capabilities and ransomware functionality, allowing the operator to steal sensitive data, encrypt it on targeted older Android versions (Android 9 or earlier), and demand a ransom payment by locking the device screen. Language indicators and files from the victims suggest the activity is primarily focused on Indonesian targets.',
      },
      {
        type: 'bullet',
        text: 'StreamRat, which abuses Android\'s accessibility services and the MediaProjection API to control infected devices, serve overlays, and harvest sensitive data. The malware targets Spanish-speaking users through Meta and TikTok ads to direct users to counterfeit sites by masquerading as a free TV-streaming service named StreamTV Esp.',
      },
      {
        type: 'paragraph',
        text: 'The development also coincides with GoldFactory\'s use of the Gigabud banking trojan to install a companion Android app called Vwork, a weaponized fork of Shelter, to clone a target app inside a work profile with the goal of conducting financial fraud. "With full remote control, and where relevant a cloned banking app in place, the operator carries out transactions directly on the victim\'s phone while a black screen hides what is happening," Group-IB said. "A cloned environment is used to evade fraud protection controls."',
      },
    ],
  },
]