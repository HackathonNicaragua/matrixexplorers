import { NgModule } from '@angular/core';
import { AvatarComponent } from './avatar/avatar';
import { ChallengeComponent } from './challenge/challenge';
import { ChallengeTypeComponent } from './challenge-type/challenge-type';
import { LevelComponent } from './level/level';
import { ProfileComponent } from './profile/profile';
import { ProfileChallengesComponent } from './profile-challenges/profile-challenges';
import { ProfileFollowersComponent } from './profile-followers/profile-followers';
import { PublicityComponent } from './publicity/publicity';
import { PublicityChallengeComponent } from './publicity-challenge/publicity-challenge';
@NgModule({
	declarations: [AvatarComponent,
    ChallengeComponent,
    ChallengeTypeComponent,
    LevelComponent,
    ProfileComponent,
    ProfileChallengesComponent,
    ProfileFollowersComponent,
    PublicityComponent,
    PublicityChallengeComponent],
	imports: [],
	exports: [AvatarComponent,
    ChallengeComponent,
    ChallengeTypeComponent,
    LevelComponent,
    ProfileComponent,
    ProfileChallengesComponent,
    ProfileFollowersComponent,
    PublicityComponent,
    PublicityChallengeComponent]
})
export class ComponentsModule {}
